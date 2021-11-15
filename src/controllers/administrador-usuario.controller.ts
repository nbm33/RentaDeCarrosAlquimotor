import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Administrador,
  Usuario,
} from '../models';
import {AdministradorRepository} from '../repositories';

export class AdministradorUsuarioController {
  constructor(
    @repository(AdministradorRepository)
    public administradorRepository: AdministradorRepository,
  ) { }

  @get('/administradors/{id}/usuario', {
    responses: {
      '200': {
        description: 'Usuario belonging to Administrador',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Usuario)},
          },
        },
      },
    },
  })
  async getUsuario(
    @param.path.string('id') id: typeof Administrador.prototype.id,
  ): Promise<Usuario> {
    return this.administradorRepository.usuario(id);
  }
}
