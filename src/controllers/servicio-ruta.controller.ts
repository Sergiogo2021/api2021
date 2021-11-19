import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Servicio,
  Ruta,
} from '../models';
import {ServicioRepository} from '../repositories';

export class ServicioRutaController {
  constructor(
    @repository(ServicioRepository)
    public servicioRepository: ServicioRepository,
  ) { }

  @get('/servicios/{id}/ruta', {
    responses: {
      '200': {
        description: 'Ruta belonging to Servicio',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Ruta)},
          },
        },
      },
    },
  })
  async getRuta(
    @param.path.string('id') id: typeof Servicio.prototype.id,
  ): Promise<Ruta> {
    return this.servicioRepository.rutafk(id);
  }
}
