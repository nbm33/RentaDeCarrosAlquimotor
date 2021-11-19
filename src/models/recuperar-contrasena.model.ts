import {Model, model, property} from '@loopback/repository';

@model()
export class RecuperarContrasena extends Model {
  @property({
    type: 'string',
    required: true,
  })
  usuario: string;


  constructor(data?: Partial<RecuperarContrasena>) {
    super(data);
  }
}

export interface RecuperarContrasenaRelations {
  // describe navigational properties here
}

export type RecuperarContrasenaWithRelations = RecuperarContrasena & RecuperarContrasenaRelations;
