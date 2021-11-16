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
  Administrador,
  Vehiculos,
} from '../models';
import {AdministradorRepository} from '../repositories';

export class AdministradorVehiculosController {
  constructor(
    @repository(AdministradorRepository) protected administradorRepository: AdministradorRepository,
  ) { }

  @get('/administradors/{id}/vehiculos', {
    responses: {
      '200': {
        description: 'Array of Administrador has many Vehiculos',
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
    return this.administradorRepository.vehiculos(id).find(filter);
  }

  @post('/administradors/{id}/vehiculos', {
    responses: {
      '200': {
        description: 'Administrador model instance',
        content: {'application/json': {schema: getModelSchemaRef(Vehiculos)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Administrador.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vehiculos, {
            title: 'NewVehiculosInAdministrador',
            exclude: ['id'],
            optional: ['administradorId']
          }),
        },
      },
    }) vehiculos: Omit<Vehiculos, 'id'>,
  ): Promise<Vehiculos> {
    return this.administradorRepository.vehiculos(id).create(vehiculos);
  }

  @patch('/administradors/{id}/vehiculos', {
    responses: {
      '200': {
        description: 'Administrador.Vehiculos PATCH success count',
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
    return this.administradorRepository.vehiculos(id).patch(vehiculos, where);
  }

  @del('/administradors/{id}/vehiculos', {
    responses: {
      '200': {
        description: 'Administrador.Vehiculos DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Vehiculos)) where?: Where<Vehiculos>,
  ): Promise<Count> {
    return this.administradorRepository.vehiculos(id).delete(where);
  }
}
