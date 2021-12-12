import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody
} from '@loopback/rest';
import {
  Asesores,
  Vehiculos
} from '../models';
import {AsesoresRepository} from '../repositories';

export class AsesoresVehiculosController {
  constructor(
    @repository(AsesoresRepository) protected asesoresRepository: AsesoresRepository,
  ) { }

  @get('/asesores/{id}/vehiculos', {
    responses: {
      '200': {
        description: 'Array of Asesores has many Vehiculos',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Vehiculos)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Vehiculos>,
  ): Promise<Vehiculos[]> {
    return this.asesoresRepository.vehiculosF(id).find(filter);
  }

  @post('/asesores/{id}/vehiculos', {
    responses: {
      '200': {
        description: 'Asesores model instance',
        content: {'application/json': {schema: getModelSchemaRef(Vehiculos)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Asesores.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vehiculos, {
            title: 'NewVehiculosInAsesores',
            exclude: ['id'],
            optional: ['asesoresId']
          }),
        },
      },
    }) vehiculos: Omit<Vehiculos, 'id'>,
  ): Promise<Vehiculos> {
    return this.asesoresRepository.vehiculosF(id).create(vehiculos);
  }

  @patch('/asesores/{id}/vehiculos', {
    responses: {
      '200': {
        description: 'Asesores.Vehiculos PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vehiculos, {partial: true}),
        },
      },
    })
    vehiculos: Partial<Vehiculos>,
    @param.query.object('where', getWhereSchemaFor(Vehiculos)) where?: Where<Vehiculos>,
  ): Promise<Count> {
    return this.asesoresRepository.vehiculosF(id).patch(vehiculos, where);
  }

  @del('/asesores/{id}/vehiculos', {
    responses: {
      '200': {
        description: 'Asesores.Vehiculos DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Vehiculos)) where?: Where<Vehiculos>,
  ): Promise<Count> {
    return this.asesoresRepository.vehiculosF(id).delete(where);
  }
}
