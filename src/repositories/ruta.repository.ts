import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Ruta, RutaRelations, Estacion} from '../models';
import {EstacionRepository} from './estacion.repository';

export class RutaRepository extends DefaultCrudRepository<
  Ruta,
  typeof Ruta.prototype.id,
  RutaRelations
> {

  public readonly origenfk: BelongsToAccessor<Estacion, typeof Ruta.prototype.id>;

  public readonly destinofk: BelongsToAccessor<Estacion, typeof Ruta.prototype.id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('EstacionRepository') protected estacionRepositoryGetter: Getter<EstacionRepository>,
  ) {
    super(Ruta, dataSource);
    this.destinofk = this.createBelongsToAccessorFor('destinofk', estacionRepositoryGetter,);
    this.registerInclusionResolver('destinofk', this.destinofk.inclusionResolver);
    this.origenfk = this.createBelongsToAccessorFor('origenfk', estacionRepositoryGetter,);
    this.registerInclusionResolver('origenfk', this.origenfk.inclusionResolver);
  }
}
