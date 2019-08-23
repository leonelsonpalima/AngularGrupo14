import { Validadores } from './validadores';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("correo", { static: true }) correo: ElementRef
  group: FormGroup

  constructor() { }

  ngOnInit() {
    this.group = new FormGroup({
      correo: new FormControl(null, [Validators.required, Validators.email, Validadores.validadorCorreoEmpresarial]),
      nombre: new FormControl("Sergio", Validators.required),
      contrasena: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z]{6,15}$/i)]),
      confirmacion: new FormControl(null, this.validarConfirmacion),
      edad: new FormControl(null, [Validators.required, this.rangoEdades(18, 30)])
    })


    this.group.valueChanges.subscribe(
      cambios => console.log(cambios.correo)
    )


  }

  rangoEdades(min: number, max: number) {
    const validadorEdades = (control: AbstractControl): { [s: string]: boolean } => {
      if (control && control.value) {
        const edad = +control.value

        if (edad >= min && edad <= max) return null

        return { edadProhibida: true }
      }

      return null
    }

    return validadorEdades
  }

  validarConfirmacion(control: AbstractControl): { [s: string]: boolean } {
    if (!control || !control.parent) return null

    const contrasena = control.parent.get("contrasena")
    const confirmacion = control.parent.get("confirmacion")

    if (!contrasena || !confirmacion) return null

    if (contrasena.value == "") return null

    if (contrasena.value != confirmacion.value) return { contrasenaNoCoincide: true }

    return null
  }

  registrar() {
    //if(this.group.invalid) return false

    if (this.group.valid) {
      /* console.log(this.group.value) */
      console.log(this.group.getRawValue())
      this.group.reset()
      this.correo.nativeElement.focus()
    }
  }

  cargarData() {
    this.group.setValue({
      correo: "sergio@correo.com",
      nombre: "Alicia",
      contrasena: "abcdef",
      confirmacion: "abcdef",
      edad: 24
    })
  }

  cargarDataParcial() {
    this.group.patchValue({
      correo: "todoOnada@fullstackPeru.com",
      contrasena: "sexo"
    })
  }
}
