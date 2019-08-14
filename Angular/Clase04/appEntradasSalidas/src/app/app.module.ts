import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntradasSalidasComponent } from './entradas-salidas/entradas-salidas.component';
import { SalidaComponent } from './salida/salida.component';

@NgModule({
  declarations: [
    AppComponent,
    EntradasSalidasComponent,
    SalidaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
