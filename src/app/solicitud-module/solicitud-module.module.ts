import { DatosBancariosComponent } from './../datos-bancarios/datos-bancarios.component';
import { ListaSolicitudesComponent } from './../lista-solicitudes/lista-solicitudes.component';
import { CentroComponent } from './../centro/centro.component';
import { SelectorCentroComponent } from './../selector-centro/selector-centro.component';
import { SolicitudComponent } from './../solicitud/solicitud.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SolicitudComponent,
    SelectorCentroComponent,
    CentroComponent,
    ListaSolicitudesComponent,
    DatosBancariosComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class SolicitudModule {}
