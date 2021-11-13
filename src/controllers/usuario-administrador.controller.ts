import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Usuario,
  Administrador,
} from '../models';
import {UsuarioRepository} from '../repositories';

export class UsuarioAdministradorController {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository: UsuarioRepository,
  ) { }

  @get('/usuarios/{id}/administrador', {
    responses: {
      '200': {
        description: 'Administrador belonging to Usuario',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Administrador)},
          },
        },
      },
    },
  })
  async getAdministrador(
    @param.path.string('id') id: typeof Usuario.prototype.id,
  ): Promise<Administrador> {
    return this.usuarioRepository.administrador(id);
  }
}
