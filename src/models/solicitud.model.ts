import {belongsTo, Entity, model, property} from '@loopback/repository';
import {PuntoAlquiler} from './punto-alquiler.model';

@model()
export class Solicitud extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  FechaRecogida: string;

  @property({
    type: 'date',
    required: true,
  })
  FechaEntrega: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  Estado: string[];

  @property({
    type: 'date',
    required: true,
  })
  FechaSolicitud: string;

  @property({
    type: 'number',
    required: true,
  })
  ValorTotal: number;

  @property({
    type: 'string',
  })
  clienteId?: string;

  @property({
    type: 'string',
  })
  vehiculoId?: string;

  @belongsTo(() => PuntoAlquiler)
  puntoAlquilerId: string;

  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
