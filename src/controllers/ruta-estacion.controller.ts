import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Ruta,
  Estacion,
} from '../models';
import {RutaRepository} from '../repositories';

export class RutaEstacionController {
  constructor(
    @repository(RutaRepository)
    public rutaRepository: RutaRepository,
  ) { }

  @get('/rutas/{id}/estacion', {
    responses: {
      '200': {
        description: 'Estacion belonging to Ruta',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Estacion)},
          },
        },
      },
    },
  })
  async getEstacion(
    @param.path.string('id') id: typeof Ruta.prototype.id,
  ): Promise<Estacion> {
    return this.rutaRepository.destinofk(id);
  }
}
