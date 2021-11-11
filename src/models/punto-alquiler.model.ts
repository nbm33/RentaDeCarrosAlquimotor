import {Entity, model, property} from '@loopback/repository';

@model()
export class PuntoAlquiler extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  Departamento: string[];

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  Ciudad: string[];

  @property({
    type: 'string',
    required: true,
  })
  Direccion: string;


  constructor(data?: Partial<PuntoAlquiler>) {
    super(data);
  }
}

export interface PuntoAlquilerRelations {
  // describe navigational properties here
}

export type PuntoAlquilerWithRelations = PuntoAlquiler & PuntoAlquilerRelations;
