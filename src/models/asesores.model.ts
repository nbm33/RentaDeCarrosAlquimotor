import {belongsTo, Entity, hasMany, model, property} from '@loopback/repository';
import {Usuario} from './usuario.model';
import {Vehiculos} from './vehiculos.model';

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

  @hasMany(() => Vehiculos)
  vehiculosF: Vehiculos[];

  constructor(data?: Partial<Asesores>) {
    super(data);
  }
}

export interface AsesoresRelations {
  // describe navigational properties here
}

export type AsesoresWithRelations = Asesores & AsesoresRelations;
