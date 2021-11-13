import {Entity, model, property} from '@loopback/repository';

@model()
export class Solicitud extends Entity {
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
  fechasolicitud: string;

  @property({
    type: 'string',
    required: true,
  })
  estadosolicitud: string;

  @property({
    type: 'string',
    required: true,
  })
  fechaRecogida: string;

  @property({
    type: 'string',
    default: yes,
  })
  fechaEntrega?: string;


  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
