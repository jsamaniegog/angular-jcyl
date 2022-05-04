import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CentroComponent } from './centro/centro.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { SelectorCentroComponent } from './selector-centro/selector-centro.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';
import { ListaCentrosComponent } from './lista-centros/lista-centros.component';

const routes: Routes = [
  {
    path: '',
    component: ListaCentrosComponent
  },
  {
    path: 'solicitud',
    component: SolicitudComponent
  },
 ];

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
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
