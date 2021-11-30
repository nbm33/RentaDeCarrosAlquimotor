import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {
  fbValitador = this.fb.group({
    usuario: ['', [Validators.required, Validators.email]],
    clave: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.log(this.fbValitador.value);
  }
}
