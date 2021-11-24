import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Solicitud} from './solicitud.model';

@model()
export class TarjetaCredito extends Entity {
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
  foto: string;

  @property({
    type: 'string',
    required: true,
  })
  numero: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  codigo: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaexpiracion: string;

  @belongsTo(() => Solicitud)
  solicitudId: string;

  constructor(data?: Partial<TarjetaCredito>) {
    super(data);
  }
}

export interface TarjetaCreditoRelations {
  // describe navigational properties here
}

export type TarjetaCreditoWithRelations = TarjetaCredito & TarjetaCreditoRelations;
