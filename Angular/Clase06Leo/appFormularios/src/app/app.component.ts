import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import{Validadores} from './validadores'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  group: FormGroup


  constructor(){}

  ngOnInit(){
    this.group = new FormGroup({
      correo: new FormControl(null, [Validators.required, Validators.email, Validadores.validadorCorreoEmpresarial]),
      nombre: new FormControl(null, Validators.required),
      contrasena: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z]\w{6,14}$/i)]),
      edad: new FormControl(null, [Validators.required, this.rangoEdad(18,30)]),
      confirmacion: new FormControl(null, this.validarConfirmacion),
    })
  }

  rangoEdad(min, max){
    const rangoValidador = (control: FormControl): {[s: string]:boolean} => {
      
      if(control && control.value){
        const edad = control.value
        
        if(edad <min || edad >max)
          return {rangoEdad: true}
      }
      return null
    }
    return rangoValidador
  }

  validarConfirmacion(control: AbstractControl): {[s: string]: boolean}
  {
    if(!control || !control.parent) return null

    const contrasena = control.parent.get("contrasena")
    const confirmacion = control.parent.get("confirmacion")

    if(!contrasena || !confirmacion) return null

    if(contrasena.value == "") return null

    if(contrasena.value != confirmacion.value) return {contrasenaNoCoincide : true}

    return null
    
  }



  registrar() {

  }

  cargarData() {

  }

  cargarDataParcial() {

  }
}
