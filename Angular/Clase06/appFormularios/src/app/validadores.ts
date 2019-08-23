import { FormControl } from '@angular/forms';

export class Validadores {

  static validadorCorreoEmpresarial(control: FormControl): { [s: string]: boolean } {

    const listaCorreosGratuitos = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"]

    if (control && control.value) {
      const valor = control.value
      const partes = valor.split("@")

      if (partes.length != 2) return null

      if (listaCorreosGratuitos.indexOf(partes[1]) == -1) return null

      return { correoGratuito: true }
    }

    return null
  }
}
