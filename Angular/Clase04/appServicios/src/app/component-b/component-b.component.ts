import { AlumnosService } from '../alumnos.service';
import { Alumno } from '../alumno';
import { Component, OnInit } from '@angular/core';
import { IAlumno } from '../alumno.interface';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {

  alumnos: IAlumno[]

  alumnosService: AlumnosService

  constructor(alumnosService: AlumnosService) {
    this.alumnosService = alumnosService
  }

  ngOnInit() {
    //this.obj = new AlumnosService()
  }

  listar() {
    this.alumnos = this.alumnosService.listar()
  }

}
