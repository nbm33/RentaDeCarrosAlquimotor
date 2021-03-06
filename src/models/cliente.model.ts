import {Entity, model, property, belongsTo} from '@loopback/repository';
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
