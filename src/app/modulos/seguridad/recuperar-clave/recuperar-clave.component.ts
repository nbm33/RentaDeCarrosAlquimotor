import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.css']
})
export class RecuperarClaveComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('')
  });


  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }
  
  onSubmit() {
    if (this.form.valid) {
      console.log(this.form);
      this.recuperarClave();
      // this.recuperarClave();
    } else {
      console.warn(this.form.value);
    }
  }

  recuperarClave() {
    let correo = this.form.value.RecuperarClave;
    console.log(correo);
  }

}
