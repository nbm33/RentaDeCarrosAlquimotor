import {Entity, hasMany, model, property} from '@loopback/repository';
import {Solicitud} from './solicitud.model';

@model()
export class Vehiculos extends Entity {
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
    type: 'string',
    required: true,
  })
  Tipo: string;

  @property({
    type: 'string',
    required: true,
  })
  Marca: string;

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
  administradorId?: string;

  @property({
    type: 'string',
  })
  asesoresId?: string;

  @property({
    type: 'string',
  })
  puntoAlquilerId?: string;

  @hasMany(() => Solicitud)
  solicituds: Solicitud[];

  constructor(data?: Partial<Vehiculos>) {
    super(data);
  }
}

export interface VehiculosRelations {
  // describe navigational properties here
}

export type VehiculosWithRelations = Vehiculos & VehiculosRelations;
