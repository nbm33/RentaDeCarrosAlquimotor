import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Asesores,
  Usuario,
} from '../models';
import {AsesoresRepository} from '../repositories';

export class AsesoresUsuarioController {
  constructor(
    @repository(AsesoresRepository)
    public asesoresRepository: AsesoresRepository,
  ) { }

  @get('/asesores/{id}/usuario', {
    responses: {
      '200': {
        description: 'Usuario belonging to Asesores',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Usuario)},
          },
        },
      },
    },
  })
  async getUsuario(
    @param.path.string('id') id: typeof Asesores.prototype.id,
  ): Promise<Usuario> {
    return this.asesoresRepository.usuario(id);
  }
}
