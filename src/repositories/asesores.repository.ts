import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Asesores, AsesoresRelations, Usuario} from '../models';
import {UsuarioRepository} from './usuario.repository';

export class AsesoresRepository extends DefaultCrudRepository<
  Asesores,
  typeof Asesores.prototype.id,
  AsesoresRelations
> {

  public readonly usuario: BelongsToAccessor<Usuario, typeof Asesores.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('UsuarioRepository') protected usuarioRepositoryGetter: Getter<UsuarioRepository>,
  ) {
    super(Asesores, dataSource);
    this.usuario = this.createBelongsToAccessorFor('usuario', usuarioRepositoryGetter,);
    this.registerInclusionResolver('usuario', this.usuario.inclusionResolver);
  }
}
