import {Entity, model, property} from '@loopback/repository';

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
  Foto: string;

  @property({
    type: 'string',
    required: true,
  })
  Numero: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Codigo: string;

  @property({
    type: 'date',
    required: true,
  })
  FechaExpiracion: string;


  constructor(data?: Partial<TarjetaCredito>) {
    super(data);
  }
}

export interface TarjetaCreditoRelations {
  // describe navigational properties here
}

export type TarjetaCreditoWithRelations = TarjetaCredito & TarjetaCreditoRelations;
