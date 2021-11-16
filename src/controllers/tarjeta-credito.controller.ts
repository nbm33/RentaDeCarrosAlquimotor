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
import {TarjetaCredito} from '../models';
import {TarjetaCreditoRepository} from '../repositories';

export class TarjetaCreditoController {
  constructor(
    @repository(TarjetaCreditoRepository)
    public tarjetaCreditoRepository : TarjetaCreditoRepository,
  ) {}

  @post('/tarjeta-creditos')
  @response(200, {
    description: 'TarjetaCredito model instance',
    content: {'application/json': {schema: getModelSchemaRef(TarjetaCredito)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TarjetaCredito, {
            title: 'NewTarjetaCredito',
            exclude: ['id'],
          }),
        },
      },
    })
    tarjetaCredito: Omit<TarjetaCredito, 'id'>,
  ): Promise<TarjetaCredito> {
    return this.tarjetaCreditoRepository.create(tarjetaCredito);
  }

  @get('/tarjeta-creditos/count')
  @response(200, {
    description: 'TarjetaCredito model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TarjetaCredito) where?: Where<TarjetaCredito>,
  ): Promise<Count> {
    return this.tarjetaCreditoRepository.count(where);
  }

  @get('/tarjeta-creditos')
  @response(200, {
    description: 'Array of TarjetaCredito model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TarjetaCredito, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TarjetaCredito) filter?: Filter<TarjetaCredito>,
  ): Promise<TarjetaCredito[]> {
    return this.tarjetaCreditoRepository.find(filter);
  }

  @patch('/tarjeta-creditos')
  @response(200, {
    description: 'TarjetaCredito PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TarjetaCredito, {partial: true}),
        },
      },
    })
    tarjetaCredito: TarjetaCredito,
    @param.where(TarjetaCredito) where?: Where<TarjetaCredito>,
  ): Promise<Count> {
    return this.tarjetaCreditoRepository.updateAll(tarjetaCredito, where);
  }

  @get('/tarjeta-creditos/{id}')
  @response(200, {
    description: 'TarjetaCredito model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TarjetaCredito, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(TarjetaCredito, {exclude: 'where'}) filter?: FilterExcludingWhere<TarjetaCredito>
  ): Promise<TarjetaCredito> {
    return this.tarjetaCreditoRepository.findById(id, filter);
  }

  @patch('/tarjeta-creditos/{id}')
  @response(204, {
    description: 'TarjetaCredito PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TarjetaCredito, {partial: true}),
        },
      },
    })
    tarjetaCredito: TarjetaCredito,
  ): Promise<void> {
    await this.tarjetaCreditoRepository.updateById(id, tarjetaCredito);
  }

  @put('/tarjeta-creditos/{id}')
  @response(204, {
    description: 'TarjetaCredito PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tarjetaCredito: TarjetaCredito,
  ): Promise<void> {
    await this.tarjetaCreditoRepository.replaceById(id, tarjetaCredito);
  }

  @del('/tarjeta-creditos/{id}')
  @response(204, {
    description: 'TarjetaCredito DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tarjetaCreditoRepository.deleteById(id);
  }
}
