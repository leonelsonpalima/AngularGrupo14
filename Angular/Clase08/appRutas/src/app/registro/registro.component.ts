import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  fragmento

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.fragmento = this.activatedRoute.snapshot.fragment
  }

}
