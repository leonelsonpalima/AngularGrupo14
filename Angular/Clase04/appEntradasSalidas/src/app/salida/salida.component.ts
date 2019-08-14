import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent implements OnInit {
  @Output() onUpdate = new EventEmitter()

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.onUpdate.emit("Gladys Tejeda")
    }, 3000)
  }

  cambiarNombre() {
    this.onUpdate.emit("Christian Pacheco")
  }

}
