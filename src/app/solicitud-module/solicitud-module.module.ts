import { ListaSolicitudesComponent } from './../lista-solicitudes/lista-solicitudes.component';
import { CentroComponent } from './../centro/centro.component';
import { SelectorCentroComponent } from './../selector-centro/selector-centro.component';
import { SolicitudComponent } from './../solicitud/solicitud.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [SolicitudComponent, SelectorCentroComponent, CentroComponent, ListaSolicitudesComponent],
  imports: [CommonModule]
 })
 export class SolicitudModule {}
