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
  Vehiculos,
} from '../models';
import {PuntoAlquilerRepository} from '../repositories';

export class PuntoAlquilerVehiculosController {
  constructor(
    @repository(PuntoAlquilerRepository) protected puntoAlquilerRepository: PuntoAlquilerRepository,
  ) { }

  @get('/punto-alquilers/{id}/vehiculos', {
    responses: {
      '200': {
        description: 'Array of PuntoAlquiler has many Vehiculos',
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
    return this.puntoAlquilerRepository.vehiculosF(id).find(filter);
  }

  @post('/punto-alquilers/{id}/vehiculos', {
    responses: {
      '200': {
        description: 'PuntoAlquiler model instance',
        content: {'application/json': {schema: getModelSchemaRef(Vehiculos)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof PuntoAlquiler.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vehiculos, {
            title: 'NewVehiculosInPuntoAlquiler',
            exclude: ['id'],
            optional: ['puntoAlquilerId']
          }),
        },
      },
    }) vehiculos: Omit<Vehiculos, 'id'>,
  ): Promise<Vehiculos> {
    return this.puntoAlquilerRepository.vehiculosF(id).create(vehiculos);
  }

  @patch('/punto-alquilers/{id}/vehiculos', {
    responses: {
      '200': {
        description: 'PuntoAlquiler.Vehiculos PATCH success count',
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
    return this.puntoAlquilerRepository.vehiculosF(id).patch(vehiculos, where);
  }

  @del('/punto-alquilers/{id}/vehiculos', {
    responses: {
      '200': {
        description: 'PuntoAlquiler.Vehiculos DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Vehiculos)) where?: Where<Vehiculos>,
  ): Promise<Count> {
    return this.puntoAlquilerRepository.vehiculosF(id).delete(where);
  }
}
