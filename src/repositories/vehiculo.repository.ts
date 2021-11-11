import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Vehiculo, VehiculoRelations, Asesores} from '../models';
import {AsesoresRepository} from './asesores.repository';

export class VehiculoRepository extends DefaultCrudRepository<
  Vehiculo,
  typeof Vehiculo.prototype.id,
  VehiculoRelations
> {

  public readonly asesores: HasManyRepositoryFactory<Asesores, typeof Vehiculo.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('AsesoresRepository') protected asesoresRepositoryGetter: Getter<AsesoresRepository>,
  ) {
    super(Vehiculo, dataSource);
    this.asesores = this.createHasManyRepositoryFactoryFor('asesores', asesoresRepositoryGetter,);
    this.registerInclusionResolver('asesores', this.asesores.inclusionResolver);
  }
}
