import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Contrato,
  Solicitud,
} from '../models';
import {ContratoRepository} from '../repositories';

export class ContratoSolicitudController {
  constructor(
    @repository(ContratoRepository)
    public contratoRepository: ContratoRepository,
  ) { }

  @get('/contratoes/{id}/solicitud', {
    responses: {
      '200': {
        description: 'Solicitud belonging to Contrato',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Solicitud)},
          },
        },
      },
    },
  })
  async getSolicitud(
    @param.path.string('id') id: typeof Contrato.prototype.id,
  ): Promise<Solicitud> {
    return this.contratoRepository.solicitud(id);
  }
}
