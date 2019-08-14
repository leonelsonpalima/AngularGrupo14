import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = "Sergio Hidalgo"

  //alumnos: string[]
  alumnos: Array<string> = ["Javier", 'Ana', "Pedro"]

  constructor() {
    for (let alumno in this.alumnos) {
      console.log(alumno)
    }

    for (let alumno of this.alumnos) {
      console.log(alumno)
    }

  }

  asignar(nombreEnviado: string) {
    this.nombre = nombreEnviado
  }

}
