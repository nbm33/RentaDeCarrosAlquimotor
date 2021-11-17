import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {PuntoAlquiler, PuntoAlquilerRelations} from '../models';

export class PuntoAlquilerRepository extends DefaultCrudRepository<
  PuntoAlquiler,
  typeof PuntoAlquiler.prototype.id,
  PuntoAlquilerRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(PuntoAlquiler, dataSource);
  }
}
