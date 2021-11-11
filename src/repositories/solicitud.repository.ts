import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Solicitud, SolicitudRelations, PuntoAlquiler} from '../models';
import {PuntoAlquilerRepository} from './punto-alquiler.repository';

export class SolicitudRepository extends DefaultCrudRepository<
  Solicitud,
  typeof Solicitud.prototype.id,
  SolicitudRelations
> {

  public readonly puntoAlquiler: BelongsToAccessor<PuntoAlquiler, typeof Solicitud.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('PuntoAlquilerRepository') protected puntoAlquilerRepositoryGetter: Getter<PuntoAlquilerRepository>,
  ) {
    super(Solicitud, dataSource);
    this.puntoAlquiler = this.createBelongsToAccessorFor('puntoAlquiler', puntoAlquilerRepositoryGetter,);
    this.registerInclusionResolver('puntoAlquiler', this.puntoAlquiler.inclusionResolver);
  }
}
