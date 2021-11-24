import {Entity, hasMany, model, property, belongsTo} from '@loopback/repository';
import {Solicitud} from './solicitud.model';
import {Usuario} from './usuario.model';

@model()
export class Cliente extends Entity {
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
  Celular: string;

  @property({
    type: 'number',
    required: true,
  })
  Edad: number;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  Genero: string[];


  @hasMany(() => Solicitud)
  solicituds: Solicitud[];

  @belongsTo(() => Usuario)
  usuarioId: string;

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
