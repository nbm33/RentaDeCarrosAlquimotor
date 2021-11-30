import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {
  fbValitador = new FormGroup({
    usuario: new FormControl(''),
    clave: new FormControl(''),
  });

  constructor() { }

  onSubmit() {
    console.log(this.fbValitador.value);
  }
}
