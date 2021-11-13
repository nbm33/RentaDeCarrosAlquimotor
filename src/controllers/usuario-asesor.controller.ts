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
  Asesor,
} from '../models';
import {UsuarioRepository} from '../repositories';

export class UsuarioAsesorController {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository: UsuarioRepository,
  ) { }

  @get('/usuarios/{id}/asesor', {
    responses: {
      '200': {
        description: 'Asesor belonging to Usuario',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Asesor)},
          },
        },
      },
    },
  })
  async getAsesor(
    @param.path.string('id') id: typeof Usuario.prototype.id,
  ): Promise<Asesor> {
    return this.usuarioRepository.asesor(id);
  }
}
