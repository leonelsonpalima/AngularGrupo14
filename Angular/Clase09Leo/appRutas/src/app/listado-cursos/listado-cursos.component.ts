import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado-cursos',
  templateUrl: './listado-cursos.component.html',
  styleUrls: ['./listado-cursos.component.css']
})
export class ListadoCursosComponent implements OnInit {
  cursoid: number
  titulo: string
  fragmento: string

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cursoid = +this.activatedRoute.snapshot.paramMap.get("cursoid")
    this.titulo = this.activatedRoute.snapshot.queryParamMap.get("titulo")
    this.fragmento = this.activatedRoute.snapshot.fragment

    this.activatedRoute.paramMap.subscribe(
      (paramUrl: any) => this.cursoid = paramUrl.params.cursoid
    )

    this.activatedRoute.queryParamMap.subscribe(
      (paramQuery: any) => this.titulo = paramQuery.params.titulo
    )

    this.activatedRoute.fragment.subscribe(
      (fragment: any) => this.fragmento = fragment
    )
  }

}
