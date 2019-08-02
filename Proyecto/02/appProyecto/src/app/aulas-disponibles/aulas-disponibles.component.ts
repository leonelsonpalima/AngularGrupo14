import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aulas-disponibles',
  templateUrl: './aulas-disponibles.component.html',
  styleUrls: ['./aulas-disponibles.component.css']
})
export class AulasDisponiblesComponent implements OnInit {
  @Input() aulasDisponibles: string[]

  constructor() { }

  ngOnInit() {
  }

}
