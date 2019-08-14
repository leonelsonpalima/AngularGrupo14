import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  group: FormGroup
  listaCorreoGratuitos = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];

  constructor(){}

  ngOnInit(){
    this.group = new FormGroup({
      correo: new FormControl(null, [Validators.required, Validators.email, this.validadorCorreoEmpresarial.bind(this)]),
      nombre: new FormControl(null, Validators.required),
      contrasena: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z]\w{6,14}$/i)]),
      edad: new FormControl(null, [Validators.required, this.rangoEdad(18,30)]),
    })
  }

  validadorCorreoEmpresarial(control: FormControl): {[s: string]:boolean} {
    if(control && control.value){
      const valor = control.value

      const partes = valor.split("@")

      if(partes.length != 2) return null
      if(this.listaCorreoGratuitos.indexOf(partes[1]) == -1) return null 

      return {correoGratuito: true}
    }
    return null
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

  
  registrar() {

  }

  cargarData() {

  }

  cargarDataParcial() {

  }
}
