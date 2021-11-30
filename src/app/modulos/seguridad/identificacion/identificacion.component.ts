import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent {

  formValidador = this.fb.group({
    usuario: ['' , [Validators.required, Validators.email]],
    clave: ['' , Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit(){
      let usuario = this.formValidador.controls['usuario'].value;
      let clave =  this.formValidador.controls['clave'].value;
      console.log(this.formValidador.value)
  };
}




