import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("formulario", { static: true }) f: NgForm

  /*   registrar(f: NgForm) {
      if (f.valid) {
        console.log("Valido")
      } else {
        console.log("Invalido")
      }
    } */

  registrar() {
    if (this.f.valid) {
      console.log(this.f.value)
      console.log(this.f.form.getRawValue())
      console.log("Valido")
      this.f.form.reset()
    } else {
      console.log("Invalido")
    }
  }

  cargarData() {
    this.f.setValue({
      nombre: "Sergio",
      correo: "sergio.hidalgo@prueba.com",
      contrasena: "123",
      edad: 39
    })
  }

  cargarDataParcial() {
    this.f.form.patchValue({
      correo: "sergio.hidalgo@prueba.com",
      contrasena: "123"
    })
  }
}
