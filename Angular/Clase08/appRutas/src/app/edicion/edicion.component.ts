import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {
  id: number

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //this.id = +this.activatedRoute.snapshot.paramMap.get("id")

    this.activatedRoute.paramMap.subscribe(
      (data: any) => {
        this.id = data.params.id
        console.log(data)
      }
    )
  }

}
