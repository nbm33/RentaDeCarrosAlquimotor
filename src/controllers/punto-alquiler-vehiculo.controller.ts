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
  PuntoAlquiler,
  Vehiculo,
} from '../models';
import {PuntoAlquilerRepository} from '../repositories';

export class PuntoAlquilerVehiculoController {
  constructor(
    @repository(PuntoAlquilerRepository) protected puntoAlquilerRepository: PuntoAlquilerRepository,
  ) { }

  @get('/punto-alquilers/{id}/vehiculos', {
    responses: {
      '200': {
        description: 'Array of PuntoAlquiler has many Vehiculo',
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
    return this.puntoAlquilerRepository.vehiculos(id).find(filter);
  }

  @post('/punto-alquilers/{id}/vehiculos', {
    responses: {
      '200': {
        description: 'PuntoAlquiler model instance',
        content: {'application/json': {schema: getModelSchemaRef(Vehiculo)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof PuntoAlquiler.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vehiculo, {
            title: 'NewVehiculoInPuntoAlquiler',
            exclude: ['id'],
            optional: ['puntoAlquilerId']
          }),
        },
      },
    }) vehiculo: Omit<Vehiculo, 'id'>,
  ): Promise<Vehiculo> {
    return this.puntoAlquilerRepository.vehiculos(id).create(vehiculo);
  }

  @patch('/punto-alquilers/{id}/vehiculos', {
    responses: {
      '200': {
        description: 'PuntoAlquiler.Vehiculo PATCH success count',
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
    return this.puntoAlquilerRepository.vehiculos(id).patch(vehiculo, where);
  }

  @del('/punto-alquilers/{id}/vehiculos', {
    responses: {
      '200': {
        description: 'PuntoAlquiler.Vehiculo DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Vehiculo)) where?: Where<Vehiculo>,
  ): Promise<Count> {
    return this.puntoAlquilerRepository.vehiculos(id).delete(where);
  }
}
