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
  Vehiculos,
  Solicitud,
} from '../models';
import {VehiculosRepository} from '../repositories';

export class VehiculosSolicitudController {
  constructor(
    @repository(VehiculosRepository) protected vehiculosRepository: VehiculosRepository,
  ) { }

  @get('/vehiculos/{id}/solicituds', {
    responses: {
      '200': {
        description: 'Array of Vehiculos has many Solicitud',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Solicitud)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Solicitud>,
  ): Promise<Solicitud[]> {
    return this.vehiculosRepository.solicituds(id).find(filter);
  }

  @post('/vehiculos/{id}/solicituds', {
    responses: {
      '200': {
        description: 'Vehiculos model instance',
        content: {'application/json': {schema: getModelSchemaRef(Solicitud)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Vehiculos.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitud, {
            title: 'NewSolicitudInVehiculos',
            exclude: ['id'],
            optional: ['vehiculosId']
          }),
        },
      },
    }) solicitud: Omit<Solicitud, 'id'>,
  ): Promise<Solicitud> {
    return this.vehiculosRepository.solicituds(id).create(solicitud);
  }

  @patch('/vehiculos/{id}/solicituds', {
    responses: {
      '200': {
        description: 'Vehiculos.Solicitud PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitud, {partial: true}),
        },
      },
    })
    solicitud: Partial<Solicitud>,
    @param.query.object('where', getWhereSchemaFor(Solicitud)) where?: Where<Solicitud>,
  ): Promise<Count> {
    return this.vehiculosRepository.solicituds(id).patch(solicitud, where);
  }

  @del('/vehiculos/{id}/solicituds', {
    responses: {
      '200': {
        description: 'Vehiculos.Solicitud DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Solicitud)) where?: Where<Solicitud>,
  ): Promise<Count> {
    return this.vehiculosRepository.solicituds(id).delete(where);
  }
}
