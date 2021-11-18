import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {PuntoAlquiler, PuntoAlquilerRelations, Vehiculos} from '../models';
import {VehiculosRepository} from './vehiculos.repository';

export class PuntoAlquilerRepository extends DefaultCrudRepository<
  PuntoAlquiler,
  typeof PuntoAlquiler.prototype.id,
  PuntoAlquilerRelations
> {

  public readonly vehiculosF: HasManyRepositoryFactory<Vehiculos, typeof PuntoAlquiler.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('VehiculosRepository') protected vehiculosRepositoryGetter: Getter<VehiculosRepository>,
  ) {
    super(PuntoAlquiler, dataSource);
    this.vehiculosF = this.createHasManyRepositoryFactoryFor('vehiculosF', vehiculosRepositoryGetter,);
    this.registerInclusionResolver('vehiculosF', this.vehiculosF.inclusionResolver);
  }
}
