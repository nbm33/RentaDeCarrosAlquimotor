import {Entity, model, property, hasMany} from '@loopback/repository';
import {Solicitud} from './solicitud.model';

@model()
export class Vehiculo extends Entity {
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
  imagen: string;

  @property({
    type: 'string',
    required: true,
  })
  Descripcion: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  Tipo: string[];

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  Marca: string[];

  @property({
    type: 'number',
    required: true,
  })
  Modelo: number;

  @property({
    type: 'boolean',
    required: true,
  })
  Disponibilidad: boolean;

  @property({
    type: 'number',
    required: true,
  })
  ValorDia: number;

  @property({
    type: 'string',
  })
  asesoresId?: string;

  @hasMany(() => Solicitud)
  solicituds: Solicitud[];

  @property({
    type: 'string',
  })
  puntoAlquilerId?: string;

  constructor(data?: Partial<Vehiculo>) {
    super(data);
  }
}

export interface VehiculoRelations {
  // describe navigational properties here
}

export type VehiculoWithRelations = Vehiculo & VehiculoRelations;
