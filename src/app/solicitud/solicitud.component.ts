import { SolicitudesService } from './../solicitudes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css'],
})
export class SolicitudComponent implements OnInit {
  solicitud = {
    fecha: new Date(),
    nombre: '',
    apellidos: '',
    centro: '',
  };

  solicitudes: any;

  constructor(private solicitudesService: SolicitudesService) {
    this.solicitudes = solicitudesService.getSolicitudes();
  }

  ngOnInit(): void {}

  enviar() {
    if (!this.validarFormulario()) {
      alert('Tienes que indicar tu nombre y apellidos.');
      return;
    }
    if (!this.validarCentro()) {
      alert('Tienes que indicar un centro.');
      return;
    }

    this.solicitudes.push({ ...this.solicitud });
  }

  nombre($event: KeyboardEvent) {
    const element = $event.target as HTMLInputElement;
    this.solicitud.nombre = element.value;
  }

  apellidos($event: KeyboardEvent) {
    const element = $event.target as HTMLInputElement;
    this.solicitud.apellidos = element.value;
  }

  validarFormulario() {
    return (
      this.solicitud.nombre.length &&
      this.solicitud.apellidos.length &&
      this.solicitud.centro.length
    );
  }

  validarCentro() {
    return this.solicitud.centro !== '';
  }

  borrarSolicitud(indexToRemove: number) {
    this.solicitudes = this.solicitudes.filter(function (value: any, index: number, arr: any) {
      return index !== indexToRemove;
    });
  }
}
