import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() onLogging = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
  }

  ingresar() {
    this.onLogging.emit(true)
  }

}
