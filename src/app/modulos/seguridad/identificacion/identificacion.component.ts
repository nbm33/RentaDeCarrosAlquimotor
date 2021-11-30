import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent {
  fbValitador = this.fb.group({
    usuario: ['', [Validators.required, Validators.email]],
    clave: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    let usuario = this.fbValitador.controls['usuario'].value;
    let clave =  this.fbValitador.controls['clave'].value;
    alert(usuario)
    alert(clave)
    console.log(this.fbValitador.value);
  }
}




