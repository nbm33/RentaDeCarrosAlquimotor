import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Asesores, AsesoresRelations, Usuario, Vehiculo, Vehiculos} from '../models';
import {UsuarioRepository} from './usuario.repository';
import {VehiculoRepository} from './vehiculo.repository';
import {VehiculosRepository} from './vehiculos.repository';

export class AsesoresRepository extends DefaultCrudRepository<
  Asesores,
  typeof Asesores.prototype.id,
  AsesoresRelations
> {

  public readonly usuario: BelongsToAccessor<Usuario, typeof Asesores.prototype.id>;

  public readonly vehiculos: HasManyRepositoryFactory<Vehiculo, typeof Asesores.prototype.id>;

  public readonly vehiculosF: HasManyRepositoryFactory<Vehiculos, typeof Asesores.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('UsuarioRepository') protected usuarioRepositoryGetter: Getter<UsuarioRepository>, @repository.getter('VehiculoRepository') protected vehiculoRepositoryGetter: Getter<VehiculoRepository>, @repository.getter('VehiculosRepository') protected vehiculosRepositoryGetter: Getter<VehiculosRepository>,
  ) {
    super(Asesores, dataSource);
    this.vehiculosF = this.createHasManyRepositoryFactoryFor('vehiculosF', vehiculosRepositoryGetter,);
    this.registerInclusionResolver('vehiculosF', this.vehiculosF.inclusionResolver);
    this.vehiculos = this.createHasManyRepositoryFactoryFor('vehiculos', vehiculoRepositoryGetter,);
    this.registerInclusionResolver('vehiculos', this.vehiculos.inclusionResolver);
    this.usuario = this.createBelongsToAccessorFor('usuario', usuarioRepositoryGetter,);
    this.registerInclusionResolver('usuario', this.usuario.inclusionResolver);
  }
}
