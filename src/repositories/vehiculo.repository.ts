import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Vehiculo, VehiculoRelations, Asesores, Administrador, PuntoAlquiler, Solicitud} from '../models';
import {AsesoresRepository} from './asesores.repository';
import {AdministradorRepository} from './administrador.repository';
import {PuntoAlquilerRepository} from './punto-alquiler.repository';
import {SolicitudRepository} from './solicitud.repository';

export class VehiculoRepository extends DefaultCrudRepository<
  Vehiculo,
  typeof Vehiculo.prototype.id,
  VehiculoRelations
> {

  public readonly asesores: BelongsToAccessor<Asesores, typeof Vehiculo.prototype.id>;

  public readonly administrador: BelongsToAccessor<Administrador, typeof Vehiculo.prototype.id>;

  public readonly puntoAlquiler: BelongsToAccessor<PuntoAlquiler, typeof Vehiculo.prototype.id>;

  public readonly solicituds: HasManyRepositoryFactory<Solicitud, typeof Vehiculo.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('AsesoresRepository') protected asesoresRepositoryGetter: Getter<AsesoresRepository>, @repository.getter('AdministradorRepository') protected administradorRepositoryGetter: Getter<AdministradorRepository>, @repository.getter('PuntoAlquilerRepository') protected puntoAlquilerRepositoryGetter: Getter<PuntoAlquilerRepository>, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>,
  ) {
    super(Vehiculo, dataSource);
    this.solicituds = this.createHasManyRepositoryFactoryFor('solicituds', solicitudRepositoryGetter,);
    this.registerInclusionResolver('solicituds', this.solicituds.inclusionResolver);
    this.puntoAlquiler = this.createBelongsToAccessorFor('puntoAlquiler', puntoAlquilerRepositoryGetter,);
    this.registerInclusionResolver('puntoAlquiler', this.puntoAlquiler.inclusionResolver);
    this.administrador = this.createBelongsToAccessorFor('administrador', administradorRepositoryGetter,);
    this.registerInclusionResolver('administrador', this.administrador.inclusionResolver);
    this.asesores = this.createBelongsToAccessorFor('asesores', asesoresRepositoryGetter,);
    this.registerInclusionResolver('asesores', this.asesores.inclusionResolver);
  }
}
