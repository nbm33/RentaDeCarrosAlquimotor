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
import {PuntoAlquiler} from '../models';
import {PuntoAlquilerRepository} from '../repositories';

export class PuntoAlquilerController {
  constructor(
    @repository(PuntoAlquilerRepository)
    public puntoAlquilerRepository : PuntoAlquilerRepository,
  ) {}

  @post('/puntos-alquiler')
  @response(200, {
    description: 'PuntoAlquiler model instance',
    content: {'application/json': {schema: getModelSchemaRef(PuntoAlquiler)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PuntoAlquiler, {
            title: 'NewPuntoAlquiler',
            exclude: ['id'],
          }),
        },
      },
    })
    puntoAlquiler: Omit<PuntoAlquiler, 'id'>,
  ): Promise<PuntoAlquiler> {
    return this.puntoAlquilerRepository.create(puntoAlquiler);
  }

  @get('/puntos-alquiler/count')
  @response(200, {
    description: 'PuntoAlquiler model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PuntoAlquiler) where?: Where<PuntoAlquiler>,
  ): Promise<Count> {
    return this.puntoAlquilerRepository.count(where);
  }

  @get('/puntos-alquiler')
  @response(200, {
    description: 'Array of PuntoAlquiler model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PuntoAlquiler, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PuntoAlquiler) filter?: Filter<PuntoAlquiler>,
  ): Promise<PuntoAlquiler[]> {
    return this.puntoAlquilerRepository.find(filter);
  }

  @patch('/puntos-alquiler')
  @response(200, {
    description: 'PuntoAlquiler PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PuntoAlquiler, {partial: true}),
        },
      },
    })
    puntoAlquiler: PuntoAlquiler,
    @param.where(PuntoAlquiler) where?: Where<PuntoAlquiler>,
  ): Promise<Count> {
    return this.puntoAlquilerRepository.updateAll(puntoAlquiler, where);
  }

  @get('/puntos-alquiler/{id}')
  @response(200, {
    description: 'PuntoAlquiler model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PuntoAlquiler, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(PuntoAlquiler, {exclude: 'where'}) filter?: FilterExcludingWhere<PuntoAlquiler>
  ): Promise<PuntoAlquiler> {
    return this.puntoAlquilerRepository.findById(id, filter);
  }

  @patch('/puntos-alquiler/{id}')
  @response(204, {
    description: 'PuntoAlquiler PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PuntoAlquiler, {partial: true}),
        },
      },
    })
    puntoAlquiler: PuntoAlquiler,
  ): Promise<void> {
    await this.puntoAlquilerRepository.updateById(id, puntoAlquiler);
  }

  @put('/puntos-alquiler/{id}')
  @response(204, {
    description: 'PuntoAlquiler PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() puntoAlquiler: PuntoAlquiler,
  ): Promise<void> {
    await this.puntoAlquilerRepository.replaceById(id, puntoAlquiler);
  }

  @del('/puntos-alquiler/{id}')
  @response(204, {
    description: 'PuntoAlquiler DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.puntoAlquilerRepository.deleteById(id);
  }
}
