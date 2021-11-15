import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Solicitud,
  PuntoAlquiler,
} from '../models';
import {SolicitudRepository} from '../repositories';

export class SolicitudPuntoAlquilerController {
  constructor(
    @repository(SolicitudRepository)
    public solicitudRepository: SolicitudRepository,
  ) { }

  @get('/solicituds/{id}/punto-alquiler', {
    responses: {
      '200': {
        description: 'PuntoAlquiler belonging to Solicitud',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(PuntoAlquiler)},
          },
        },
      },
    },
  })
  async getPuntoAlquiler(
    @param.path.string('id') id: typeof Solicitud.prototype.id,
  ): Promise<PuntoAlquiler> {
    return this.solicitudRepository.puntoAlquiler(id);
  }
}
