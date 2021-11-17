import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Asesor,
  Usuario,
} from '../models';
import {AsesorRepository} from '../repositories';

export class AsesorUsuarioController {
  constructor(
    @repository(AsesorRepository)
    public asesorRepository: AsesorRepository,
  ) { }

  @get('/asesors/{id}/usuario', {
    responses: {
      '200': {
        description: 'Usuario belonging to Asesor',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Usuario)},
          },
        },
      },
    },
  })
  async getUsuario(
    @param.path.string('id') id: typeof Asesor.prototype.id,
  ): Promise<Usuario> {
    return this.asesorRepository.usuario(id);
  }
}
