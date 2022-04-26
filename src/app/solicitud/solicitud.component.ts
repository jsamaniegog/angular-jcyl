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

  constructor() {
    // setInterval(() => {
    //   this.solicitud.nombre = '' + Math.random();
    // }, 2000);
  }

  ngOnInit(): void {}

  enviar() {
    if (!this.validarNombreYApellidos()) {
      alert('Tienes que indicar tu nombre y apellidos.');
      return;
    }

    alert('Enviado: ' + this.solicitud.nombre + ' ' + this.solicitud.apellidos);
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
