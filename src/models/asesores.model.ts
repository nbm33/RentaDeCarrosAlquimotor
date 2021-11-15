import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Usuario} from './usuario.model';
import {Vehiculo} from './vehiculo.model';

@model()
export class Asesores extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @belongsTo(() => Usuario)
  usuarioId: string;

  @hasMany(() => Vehiculo)
  vehiculos: Vehiculo[];

  constructor(data?: Partial<Asesores>) {
    super(data);
  }
}

export interface AsesoresRelations {
  // describe navigational properties here
}

export type AsesoresWithRelations = Asesores & AsesoresRelations;
