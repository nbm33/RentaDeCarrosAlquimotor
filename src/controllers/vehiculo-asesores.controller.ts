import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Vehiculo,
  Asesores,
} from '../models';
import {VehiculoRepository} from '../repositories';

export class VehiculoAsesoresController {
  constructor(
    @repository(VehiculoRepository)
    public vehiculoRepository: VehiculoRepository,
  ) { }

  @get('/vehiculos/{id}/asesores', {
    responses: {
      '200': {
        description: 'Asesores belonging to Vehiculo',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Asesores)},
          },
        },
      },
    },
  })
  async getAsesores(
    @param.path.string('id') id: typeof Vehiculo.prototype.id,
  ): Promise<Asesores> {
    return this.vehiculoRepository.asesores(id);
  }
}
