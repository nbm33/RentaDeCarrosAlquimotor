import {Entity, hasMany, model, property} from '@loopback/repository';
import {Vehiculo} from './vehiculo.model';
import {Vehiculos} from './vehiculos.model';

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
  Departamento: string;

  @property({
    type: 'string',
    required: true,
  })
  Ciudad: string;

  @property({
    type: 'string',
    required: true,
  })
  Direccion: string;

  @hasMany(() => Vehiculo)
  vehiculos: Vehiculo[];

  @hasMany(() => Vehiculos)
  vehiculosF: Vehiculos[];

  constructor(data?: Partial<PuntoAlquiler>) {
    super(data);
  }
}

export interface PuntoAlquilerRelations {
  // describe navigational properties here
}

export type PuntoAlquilerWithRelations = PuntoAlquiler & PuntoAlquilerRelations;
