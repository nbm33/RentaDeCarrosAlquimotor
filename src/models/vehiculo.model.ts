import {Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import {Administrador} from './administrador.model';
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

  @hasMany(() => Administrador)
  yes: Administrador[];

  @property({
    type: 'string',
  })
  administradorId?: string;

  @property({
    type: 'string',
  })
  asesorId?: string;

  @property({
    type: 'string',
  })
  puntoAlquilerId?: string;

  @belongsTo(() => Solicitud)
  solicitudId: string;

  constructor(data?: Partial<Vehiculo>) {
    super(data);
  }
}

export interface VehiculoRelations {
  // describe navigational properties here
}

export type VehiculoWithRelations = Vehiculo & VehiculoRelations;
