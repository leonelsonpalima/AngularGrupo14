import { LogService } from './log.service';
import { Alumno } from './alumno';
import { Injectable } from '@angular/core';
import { IAlumno } from './alumno.interface';

@Injectable({
  providedIn: "root"
})
export class AlumnosService {
  /*   private alumnos: Array<Alumno> = [
      new Alumno("Jimena", "Jimenez"),
      new Alumno("Erika", "Choy"),
      new Alumno("Jeanette", "Ramos")
    ] */

  private alumnos: Array<IAlumno> = [
    { nombre: "Jimena", apellido: "Jimenez" },
    { nombre: "Erika", apellido: "Choy" },
    { nombre: "Jeanette", apellido: "Ramos" }
  ]

  constructor(private logService: LogService) {

  }

  listar(): Array<IAlumno> {
    this.logService.registrar("Acción: Listar")
    return Object.assign([], this.alumnos)
  }

  insertar(alumno: IAlumno): void {
    this.logService.registrar("Acción: Insertar")
    this.alumnos.unshift(alumno)
  }
}
