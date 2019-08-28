import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estado: string = ""
  personas: any[]

  constructor() {
    const promesa = new Promise(
      (resolve, reject) => {

        const xHttp: XMLHttpRequest = new XMLHttpRequest()

        xHttp.onreadystatechange = function () {
          if (xHttp.status == 200 && xHttp.readyState == 4) {
            // console.log(xHttp.responseText)
            resolve(JSON.parse(xHttp.responseText))
          } else if (xHttp.status == 404) {
            reject(xHttp.statusText)
          }
        }

        xHttp.open("get", "http://clase.tibajodemanda.com/alumno")
        xHttp.send()

        // setTimeout(()=>{
        //   /* aqui va el codigo que llama al api rest */
        //   // resolve()
        //   reject()
        // }, 3000)
      }
    )


    promesa
      .then(
        // (respuesta)=>{console.log("promesa cumplida"); console.log(respuesta)},
        (respuesta: any) => {
          this.estado = respuesta.status
          this.personas = respuesta.results
        })
      .catch(
        (error) => { console.log("promesa no cumplida"), console.log(error) }
      )
  }
}
