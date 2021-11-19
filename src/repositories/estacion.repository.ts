import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Estacion, EstacionRelations} from '../models';

export class EstacionRepository extends DefaultCrudRepository<
  Estacion,
  typeof Estacion.prototype.id,
  EstacionRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Estacion, dataSource);
  }
}
