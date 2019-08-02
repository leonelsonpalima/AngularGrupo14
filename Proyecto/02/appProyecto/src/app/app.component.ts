import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logueado: boolean = false

  aulasDisponibles: string[] = [
    "Aula 01",
    "Aula 02",
    "Aula 03",
    "Aula 04",
    "Aula 05",
    "Aula 06",
    "Aula 07",
    "Aula 08",
    "Aula 09",
    "Aula 10",
    "Aula 11",
    "Aula 12",
    "Aula 13",
    "Aula 14",
    "Aula 15",
    "Aula 16",
    "Aula 17",
    "Aula 18",
    "Aula 19",
    "Aula 20"
  ]

  ingresar(estado: boolean) {
    this.logueado = estado
  }

}
