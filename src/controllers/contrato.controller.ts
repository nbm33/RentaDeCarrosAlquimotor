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
import {Contrato} from '../models';
import {ContratoRepository} from '../repositories';

export class ContratoController {
  constructor(
    @repository(ContratoRepository)
    public contratoRepository : ContratoRepository,
  ) {}

  @post('/contratos')
  @response(200, {
    description: 'Contrato model instance',
    content: {'application/json': {schema: getModelSchemaRef(Contrato)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Contrato, {
            title: 'NewContrato',
            exclude: ['id'],
          }),
        },
      },
    })
    contrato: Omit<Contrato, 'id'>,
  ): Promise<Contrato> {
    return this.contratoRepository.create(contrato);
  }

  @get('/contratos/count')
  @response(200, {
    description: 'Contrato model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Contrato) where?: Where<Contrato>,
  ): Promise<Count> {
    return this.contratoRepository.count(where);
  }

  @get('/contratos')
  @response(200, {
    description: 'Array of Contrato model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Contrato, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Contrato) filter?: Filter<Contrato>,
  ): Promise<Contrato[]> {
    return this.contratoRepository.find(filter);
  }

  @patch('/contratos')
  @response(200, {
    description: 'Contrato PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Contrato, {partial: true}),
        },
      },
    })
    contrato: Contrato,
    @param.where(Contrato) where?: Where<Contrato>,
  ): Promise<Count> {
    return this.contratoRepository.updateAll(contrato, where);
  }

  @get('/contratos/{id}')
  @response(200, {
    description: 'Contrato model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Contrato, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Contrato, {exclude: 'where'}) filter?: FilterExcludingWhere<Contrato>
  ): Promise<Contrato> {
    return this.contratoRepository.findById(id, filter);
  }

  @patch('/contratos/{id}')
  @response(204, {
    description: 'Contrato PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Contrato, {partial: true}),
        },
      },
    })
    contrato: Contrato,
  ): Promise<void> {
    await this.contratoRepository.updateById(id, contrato);
  }

  @put('/contratos/{id}')
  @response(204, {
    description: 'Contrato PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() contrato: Contrato,
  ): Promise<void> {
    await this.contratoRepository.replaceById(id, contrato);
  }

  @del('/contratos/{id}')
  @response(204, {
    description: 'Contrato DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.contratoRepository.deleteById(id);
  }
}
