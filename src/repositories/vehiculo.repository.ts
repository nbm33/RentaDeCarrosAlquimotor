import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Vehiculo, VehiculoRelations, Asesor, Solicitud, PuntoAlquiler} from '../models';
import {AsesorRepository} from './asesor.repository';
import {SolicitudRepository} from './solicitud.repository';
import {PuntoAlquilerRepository} from './punto-alquiler.repository';

export class VehiculoRepository extends DefaultCrudRepository<
  Vehiculo,
  typeof Vehiculo.prototype.id,
  VehiculoRelations
> {

  public readonly asesor: BelongsToAccessor<Asesor, typeof Vehiculo.prototype.id>;

  public readonly solicituds: HasManyRepositoryFactory<Solicitud, typeof Vehiculo.prototype.id>;

  public readonly puntoAlquiler: BelongsToAccessor<PuntoAlquiler, typeof Vehiculo.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('AsesorRepository') protected asesorRepositoryGetter: Getter<AsesorRepository>, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>, @repository.getter('PuntoAlquilerRepository') protected puntoAlquilerRepositoryGetter: Getter<PuntoAlquilerRepository>,
  ) {
    super(Vehiculo, dataSource);
    this.puntoAlquiler = this.createBelongsToAccessorFor('puntoAlquiler', puntoAlquilerRepositoryGetter,);
    this.registerInclusionResolver('puntoAlquiler', this.puntoAlquiler.inclusionResolver);
    this.solicituds = this.createHasManyRepositoryFactoryFor('solicituds', solicitudRepositoryGetter,);
    this.registerInclusionResolver('solicituds', this.solicituds.inclusionResolver);
    this.asesor = this.createBelongsToAccessorFor('asesor', asesorRepositoryGetter,);
    this.registerInclusionResolver('asesor', this.asesor.inclusionResolver);
  }
}
