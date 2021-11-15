import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {TarjetaCredito, TarjetaCreditoRelations, Solicitud} from '../models';
import {SolicitudRepository} from './solicitud.repository';

export class TarjetaCreditoRepository extends DefaultCrudRepository<
  TarjetaCredito,
  typeof TarjetaCredito.prototype.id,
  TarjetaCreditoRelations
> {

  public readonly solicitud: BelongsToAccessor<Solicitud, typeof TarjetaCredito.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>,
  ) {
    super(TarjetaCredito, dataSource);
    this.solicitud = this.createBelongsToAccessorFor('solicitud', solicitudRepositoryGetter,);
    this.registerInclusionResolver('solicitud', this.solicitud.inclusionResolver);
  }
}
