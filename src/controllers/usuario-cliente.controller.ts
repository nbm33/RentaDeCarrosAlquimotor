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
  Cliente,
} from '../models';
import {UsuarioRepository} from '../repositories';

export class UsuarioClienteController {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository: UsuarioRepository,
  ) { }

  @get('/usuarios/{id}/cliente', {
    responses: {
      '200': {
        description: 'Cliente belonging to Usuario',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Cliente)},
          },
        },
      },
    },
  })
  async getCliente(
    @param.path.string('id') id: typeof Usuario.prototype.id,
  ): Promise<Cliente> {
    return this.usuarioRepository.cliente(id);
  }
}
