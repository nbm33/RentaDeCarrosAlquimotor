import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Asesor} from './asesor.model';
import {Solicitud} from './solicitud.model';
import {PuntoAlquiler} from './punto-alquiler.model';

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
  descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @property({
    type: 'string',
    required: true,
  })
  marca: string;

  @property({
    type: 'string',
    required: true,
  })
  modelo: string;

  @property({
    type: 'string',
    required: true,
  })
  disponibilidad: string;

  @property({
    type: 'number',
    required: true,
  })
  valorDia: number;

  @belongsTo(() => Asesor)
  asesorId: string;

  @hasMany(() => Solicitud)
  solicituds: Solicitud[];

  @belongsTo(() => PuntoAlquiler)
  puntoAlquilerId: string;

  constructor(data?: Partial<Vehiculo>) {
    super(data);
  }
}

export interface VehiculoRelations {
  // describe navigational properties here
}

export type VehiculoWithRelations = Vehiculo & VehiculoRelations;
