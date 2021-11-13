import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {TarjetaCredito, TarjetaCreditoRelations} from '../models';

export class TarjetaCreditoRepository extends DefaultCrudRepository<
  TarjetaCredito,
  typeof TarjetaCredito.prototype.id,
  TarjetaCreditoRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(TarjetaCredito, dataSource);
  }
}
