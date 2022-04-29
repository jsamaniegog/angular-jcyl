import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { CentroComponent } from './centro/centro.component';
import { SelectorCentroComponent } from './selector-centro/selector-centro.component';

@NgModule({
  declarations: [
    AppComponent,
    SolicitudComponent,
    CentroComponent,
    SelectorCentroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
