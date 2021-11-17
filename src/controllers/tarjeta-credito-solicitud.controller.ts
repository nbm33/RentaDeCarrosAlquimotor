import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  TarjetaCredito,
  Solicitud,
} from '../models';
import {TarjetaCreditoRepository} from '../repositories';

export class TarjetaCreditoSolicitudController {
  constructor(
    @repository(TarjetaCreditoRepository)
    public tarjetaCreditoRepository: TarjetaCreditoRepository,
  ) { }

  @get('/tarjeta-creditos/{id}/solicitud', {
    responses: {
      '200': {
        description: 'Solicitud belonging to TarjetaCredito',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Solicitud)},
          },
        },
      },
    },
  })
  async getSolicitud(
    @param.path.string('id') id: typeof TarjetaCredito.prototype.id,
  ): Promise<Solicitud> {
    return this.tarjetaCreditoRepository.solicitud(id);
  }
}
