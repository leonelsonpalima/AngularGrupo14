import { AbstractControl } from '@angular/forms';

export class Validadores{

    static validadorCorreoEmpresarial(control: AbstractControl): {[s: string]:boolean} {
        const listaCorreoGratuitos = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
        if(control && control.value){
          const valor = control.value
    
          const partes = valor.split("@")
    
          if(partes.length != 2) return null
          if(listaCorreoGratuitos.indexOf(partes[1]) == -1) return null 
    
          return {correoGratuito: true}
        }
        return null
      }
}