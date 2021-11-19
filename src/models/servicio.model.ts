import {Entity, model, property} from '@loopback/repository';

@model()
export class Servicio extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  horainicio: string;

  @property({
    type: 'string',
    required: true,
  })
  horafin: string;

  @property({
    type: 'string',
    required: true,
  })
  placavehiculo: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreconductor: string;

  @property({
    type: 'string',
    required: true,
  })
  dinerorecogido: string;




  constructor(data?: Partial<Servicio>) {
    super(data);
  }
}

export interface ServicioRelations {
  // describe navigational properties here
}

export type ServicioWithRelations = Servicio & ServicioRelations;
