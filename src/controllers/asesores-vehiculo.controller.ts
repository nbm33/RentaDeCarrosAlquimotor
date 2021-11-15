import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Asesores,
  Vehiculo,
} from '../models';
import {AsesoresRepository} from '../repositories';

export class AsesoresVehiculoController {
  constructor(
    @repository(AsesoresRepository) protected asesoresRepository: AsesoresRepository,
  ) { }

  @get('/asesores/{id}/vehiculos', {
    responses: {
      '200': {
        description: 'Array of Asesores has many Vehiculo',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Vehiculo)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Vehiculo>,
  ): Promise<Vehiculo[]> {
    return this.asesoresRepository.vehiculos(id).find(filter);
  }

  @post('/asesores/{id}/vehiculos', {
    responses: {
      '200': {
        description: 'Asesores model instance',
        content: {'application/json': {schema: getModelSchemaRef(Vehiculo)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Asesores.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vehiculo, {
            title: 'NewVehiculoInAsesores',
            exclude: ['id'],
            optional: ['asesoresId']
          }),
        },
      },
    }) vehiculo: Omit<Vehiculo, 'id'>,
  ): Promise<Vehiculo> {
    return this.asesoresRepository.vehiculos(id).create(vehiculo);
  }

  @patch('/asesores/{id}/vehiculos', {
    responses: {
      '200': {
        description: 'Asesores.Vehiculo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vehiculo, {partial: true}),
        },
      },
    })
    vehiculo: Partial<Vehiculo>,
    @param.query.object('where', getWhereSchemaFor(Vehiculo)) where?: Where<Vehiculo>,
  ): Promise<Count> {
    return this.asesoresRepository.vehiculos(id).patch(vehiculo, where);
  }

  @del('/asesores/{id}/vehiculos', {
    responses: {
      '200': {
        description: 'Asesores.Vehiculo DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Vehiculo)) where?: Where<Vehiculo>,
  ): Promise<Count> {
    return this.asesoresRepository.vehiculos(id).delete(where);
  }
}
