import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { CentroComponent } from './centro/centro.component';
import { SelectorCentroComponent } from './selector-centro/selector-centro.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';

@NgModule({
  declarations: [
    AppComponent,
    SolicitudComponent,
    CentroComponent,
    SelectorCentroComponent,
    ListaSolicitudesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
