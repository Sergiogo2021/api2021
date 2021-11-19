import {Entity, model, property} from '@loopback/repository';

@model()
export class Estacion extends Entity {
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
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  coordenadax: string;

  @property({
    type: 'string',
    required: true,
  })
  coordenaday: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;


  constructor(data?: Partial<Estacion>) {
    super(data);
  }
}

export interface EstacionRelations {
  // describe navigational properties here
}

export type EstacionWithRelations = Estacion & EstacionRelations;
