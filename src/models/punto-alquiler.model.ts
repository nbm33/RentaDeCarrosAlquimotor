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
    type: 'string',
    required: true,
  })
  departamento: string;

  @property({
    type: 'string',
    required: true,
  })
  ciudad: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;


  constructor(data?: Partial<PuntoAlquiler>) {
    super(data);
  }
}

export interface PuntoAlquilerRelations {
  // describe navigational properties here
}

export type PuntoAlquilerWithRelations = PuntoAlquiler & PuntoAlquilerRelations;
