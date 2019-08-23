import { UsuarioService } from '../usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  pag: number
  tam: number
  ord: string

  personas = []

  constructor(private activatedRoute: ActivatedRoute, private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    /*     this.pag = +this.activatedRoute.snapshot.queryParamMap.get("pag")
        this.tam = +this.activatedRoute.snapshot.queryParamMap.get("tam")
        this.ord = this.activatedRoute.snapshot.queryParamMap.get("ord") */

    this.activatedRoute.queryParamMap.subscribe((data: any) => {
      /*       this.pag = data.params.pag
            this.tam = data.params.tam
            this.ord = data.params.ord */

      const { pag, tam, ord } = data.params

      this.pag = +pag
      this.tam = +tam
      this.ord = ord

      this.listar()
    })

    //this.listar()
  }

  listar() {
    this.personas = this.usuarioService.listado(this.pag, this.tam, this.ord)
  }

  cambiarPagina(pag: number) {
    /* this.router.navigate(["/usuario", "listado"], { queryParams: { pag, tam: this.tam, ord: this.ord } }) */

    this.router.navigate(["/usuario", "listado"], { queryParams: { pag, rol: "administrador" }, fragment: "admin", queryParamsHandling: "merge" })
  }

}
