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
  PuntoAlquiler,
} from '../models';
import {VehiculoRepository} from '../repositories';

export class VehiculoPuntoAlquilerController {
  constructor(
    @repository(VehiculoRepository)
    public vehiculoRepository: VehiculoRepository,
  ) { }

  @get('/vehiculos/{id}/punto-alquiler', {
    responses: {
      '200': {
        description: 'PuntoAlquiler belonging to Vehiculo',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(PuntoAlquiler)},
          },
        },
      },
    },
  })
  async getPuntoAlquiler(
    @param.path.string('id') id: typeof Vehiculo.prototype.id,
  ): Promise<PuntoAlquiler> {
    return this.vehiculoRepository.puntoAlquiler(id);
  }
}
