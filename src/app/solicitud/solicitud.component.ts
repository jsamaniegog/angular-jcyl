import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css'],
})
export class SolicitudComponent implements OnInit {
  solicitud = {
    nombre: '',
    apellidos: '',
  };

  solicitudes: any[];

  constructor() {
    this.solicitudes = []
  }

  ngOnInit(): void {}

  enviar() {
    if (!this.validarNombreYApellidos()) {
      alert('Tienes que indicar tu nombre y apellidos.');
      return;
    }

    alert('Enviado: ' + this.solicitud.nombre + ' ' + this.solicitud.apellidos);

    this.solicitudes.push({...this.solicitud});
  }

  nombre($event: KeyboardEvent) {
    const element = $event.target as HTMLInputElement;
    this.solicitud.nombre = element.value;
  }

  apellidos($event: KeyboardEvent) {
    const element = $event.target as HTMLInputElement;
    this.solicitud.apellidos = element.value;
  }

  validarNombreYApellidos() {
    return this.solicitud.nombre.length && this.solicitud.apellidos.length;
  }
}
