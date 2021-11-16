import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {PuntoAlquiler, PuntoAlquilerRelations, Vehiculo, Vehiculos} from '../models';
import {VehiculoRepository} from './vehiculo.repository';
import {VehiculosRepository} from './vehiculos.repository';

export class PuntoAlquilerRepository extends DefaultCrudRepository<
  PuntoAlquiler,
  typeof PuntoAlquiler.prototype.id,
  PuntoAlquilerRelations
> {

  public readonly vehiculos: HasManyRepositoryFactory<Vehiculo, typeof PuntoAlquiler.prototype.id>;

  public readonly vehiculosF: HasManyRepositoryFactory<Vehiculos, typeof PuntoAlquiler.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('VehiculoRepository') protected vehiculoRepositoryGetter: Getter<VehiculoRepository>, @repository.getter('VehiculosRepository') protected vehiculosRepositoryGetter: Getter<VehiculosRepository>,
  ) {
    super(PuntoAlquiler, dataSource);
    this.vehiculosF = this.createHasManyRepositoryFactoryFor('vehiculosF', vehiculosRepositoryGetter,);
    this.registerInclusionResolver('vehiculosF', this.vehiculosF.inclusionResolver);
    this.vehiculos = this.createHasManyRepositoryFactoryFor('vehiculos', vehiculoRepositoryGetter,);
    this.registerInclusionResolver('vehiculos', this.vehiculos.inclusionResolver);
  }
}
