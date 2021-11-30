import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent {

  formValidador: FormGroup = this.fb.group({
    usuario: [ , [Validators.required, Validators.email]],
    clave: [ , Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  guardar(){
      console.log(this.formValidador.value)
  };
}

// let usuario = this.formValidador.controls['usuario'].value;
// let clave =  this.formValidador.controls['clave'].value;
// this.formValidador.reset();