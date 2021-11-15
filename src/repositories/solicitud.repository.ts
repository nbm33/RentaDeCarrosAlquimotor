import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Solicitud, SolicitudRelations, Cliente, Vehiculo, PuntoAlquiler} from '../models';
import {ClienteRepository} from './cliente.repository';
import {VehiculoRepository} from './vehiculo.repository';
import {PuntoAlquilerRepository} from './punto-alquiler.repository';

export class SolicitudRepository extends DefaultCrudRepository<
  Solicitud,
  typeof Solicitud.prototype.id,
  SolicitudRelations
> {

  public readonly cliente: BelongsToAccessor<Cliente, typeof Solicitud.prototype.id>;

  public readonly vehiculo: BelongsToAccessor<Vehiculo, typeof Solicitud.prototype.id>;

  public readonly puntoAlquiler: BelongsToAccessor<PuntoAlquiler, typeof Solicitud.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>, @repository.getter('VehiculoRepository') protected vehiculoRepositoryGetter: Getter<VehiculoRepository>, @repository.getter('PuntoAlquilerRepository') protected puntoAlquilerRepositoryGetter: Getter<PuntoAlquilerRepository>,
  ) {
    super(Solicitud, dataSource);
    this.puntoAlquiler = this.createBelongsToAccessorFor('puntoAlquiler', puntoAlquilerRepositoryGetter,);
    this.registerInclusionResolver('puntoAlquiler', this.puntoAlquiler.inclusionResolver);
    this.vehiculo = this.createBelongsToAccessorFor('vehiculo', vehiculoRepositoryGetter,);
    this.registerInclusionResolver('vehiculo', this.vehiculo.inclusionResolver);
    this.cliente = this.createBelongsToAccessorFor('cliente', clienteRepositoryGetter,);
    this.registerInclusionResolver('cliente', this.cliente.inclusionResolver);
  }
}
