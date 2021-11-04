import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Cliente,
  Usuario,
} from '../models';
import {ClienteRepository} from '../repositories';

export class ClienteUsuarioController {
  constructor(
    @repository(ClienteRepository)
    public clienteRepository: ClienteRepository,
  ) { }

  @get('/clientes/{id}/usuario', {
    responses: {
      '200': {
        description: 'Usuario belonging to Cliente',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Usuario)},
          },
        },
      },
    },
  })
  async getUsuario(
    @param.path.string('id') id: typeof Cliente.prototype.id,
  ): Promise<Usuario> {
    return this.clienteRepository.usuario(id);
  }
}
