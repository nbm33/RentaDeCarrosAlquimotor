import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Asesores} from './asesores.model';
import {Administrador} from './administrador.model';
import {PuntoAlquiler} from './punto-alquiler.model';
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
  Imagen: string;

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

  @belongsTo(() => Asesores)
  asesoresId: string;

  @belongsTo(() => Administrador)
  administradorId: string;

  @belongsTo(() => PuntoAlquiler)
  puntoAlquilerId: string;

  @hasMany(() => Solicitud)
  solicituds: Solicitud[];

  constructor(data?: Partial<Vehiculo>) {
    super(data);
  }
}

export interface VehiculoRelations {
  // describe navigational properties here
}

export type VehiculoWithRelations = Vehiculo & VehiculoRelations;
