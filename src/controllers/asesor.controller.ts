import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Asesores} from '../models';
import {AsesoresRepository} from '../repositories';

export class AsesorController {
  constructor(
    @repository(AsesoresRepository)
    public asesoresRepository : AsesoresRepository,
  ) {}

  @post('/asesores')
  @response(200, {
    description: 'Asesores model instance',
    content: {'application/json': {schema: getModelSchemaRef(Asesores)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asesores, {
            title: 'NewAsesores',
            exclude: ['id'],
          }),
        },
      },
    })
    asesores: Omit<Asesores, 'id'>,
  ): Promise<Asesores> {
    return this.asesoresRepository.create(asesores);
  }

  @get('/asesores/count')
  @response(200, {
    description: 'Asesores model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Asesores) where?: Where<Asesores>,
  ): Promise<Count> {
    return this.asesoresRepository.count(where);
  }

  @get('/asesores')
  @response(200, {
    description: 'Array of Asesores model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Asesores, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Asesores) filter?: Filter<Asesores>,
  ): Promise<Asesores[]> {
    return this.asesoresRepository.find(filter);
  }

  @patch('/asesores')
  @response(200, {
    description: 'Asesores PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asesores, {partial: true}),
        },
      },
    })
    asesores: Asesores,
    @param.where(Asesores) where?: Where<Asesores>,
  ): Promise<Count> {
    return this.asesoresRepository.updateAll(asesores, where);
  }

  @get('/asesores/{id}')
  @response(200, {
    description: 'Asesores model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Asesores, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Asesores, {exclude: 'where'}) filter?: FilterExcludingWhere<Asesores>
  ): Promise<Asesores> {
    return this.asesoresRepository.findById(id, filter);
  }

  @patch('/asesores/{id}')
  @response(204, {
    description: 'Asesores PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asesores, {partial: true}),
        },
      },
    })
    asesores: Asesores,
  ): Promise<void> {
    await this.asesoresRepository.updateById(id, asesores);
  }

  @put('/asesores/{id}')
  @response(204, {
    description: 'Asesores PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() asesores: Asesores,
  ): Promise<void> {
    await this.asesoresRepository.replaceById(id, asesores);
  }

  @del('/asesores/{id}')
  @response(204, {
    description: 'Asesores DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.asesoresRepository.deleteById(id);
  }
}
