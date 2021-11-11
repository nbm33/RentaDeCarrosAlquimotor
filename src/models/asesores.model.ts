import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Usuario} from './usuario.model';

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

  @property({
    type: 'string',
  })
  vehiculoId?: string;

  constructor(data?: Partial<Asesores>) {
    super(data);
  }
}

export interface AsesoresRelations {
  // describe navigational properties here
}

export type AsesoresWithRelations = Asesores & AsesoresRelations;
