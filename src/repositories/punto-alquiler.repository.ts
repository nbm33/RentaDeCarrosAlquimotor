import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {PuntoAlquiler, PuntoAlquilerRelations, Vehiculo} from '../models';
import {VehiculoRepository} from './vehiculo.repository';

export class PuntoAlquilerRepository extends DefaultCrudRepository<
  PuntoAlquiler,
  typeof PuntoAlquiler.prototype.id,
  PuntoAlquilerRelations
> {

  public readonly vehiculos: HasManyRepositoryFactory<Vehiculo, typeof PuntoAlquiler.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('VehiculoRepository') protected vehiculoRepositoryGetter: Getter<VehiculoRepository>,
  ) {
    super(PuntoAlquiler, dataSource);
    this.vehiculos = this.createHasManyRepositoryFactoryFor('vehiculos', vehiculoRepositoryGetter,);
    this.registerInclusionResolver('vehiculos', this.vehiculos.inclusionResolver);
  }
}
