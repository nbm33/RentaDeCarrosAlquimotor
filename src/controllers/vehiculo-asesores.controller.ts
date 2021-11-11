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
  Vehiculo,
  Asesores,
} from '../models';
import {VehiculoRepository} from '../repositories';

export class VehiculoAsesoresController {
  constructor(
    @repository(VehiculoRepository) protected vehiculoRepository: VehiculoRepository,
  ) { }

  @get('/vehiculos/{id}/asesores', {
    responses: {
      '200': {
        description: 'Array of Vehiculo has many Asesores',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Asesores)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Asesores>,
  ): Promise<Asesores[]> {
    return this.vehiculoRepository.asesores(id).find(filter);
  }

  @post('/vehiculos/{id}/asesores', {
    responses: {
      '200': {
        description: 'Vehiculo model instance',
        content: {'application/json': {schema: getModelSchemaRef(Asesores)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Vehiculo.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asesores, {
            title: 'NewAsesoresInVehiculo',
            exclude: ['id'],
            optional: ['vehiculoId']
          }),
        },
      },
    }) asesores: Omit<Asesores, 'id'>,
  ): Promise<Asesores> {
    return this.vehiculoRepository.asesores(id).create(asesores);
  }

  @patch('/vehiculos/{id}/asesores', {
    responses: {
      '200': {
        description: 'Vehiculo.Asesores PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asesores, {partial: true}),
        },
      },
    })
    asesores: Partial<Asesores>,
    @param.query.object('where', getWhereSchemaFor(Asesores)) where?: Where<Asesores>,
  ): Promise<Count> {
    return this.vehiculoRepository.asesores(id).patch(asesores, where);
  }

  @del('/vehiculos/{id}/asesores', {
    responses: {
      '200': {
        description: 'Vehiculo.Asesores DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Asesores)) where?: Where<Asesores>,
  ): Promise<Count> {
    return this.vehiculoRepository.asesores(id).delete(where);
  }
}
