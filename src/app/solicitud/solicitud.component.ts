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
    alert('Enviado: ' + this.solicitud.nombre + ' ' + this.solicitud.apellidos);
  }

  nombre($event: KeyboardEvent) {
    const element = $event.target as HTMLInputElement
    this.solicitud.nombre = element.value;
  }

  apellidos($event: KeyboardEvent) {
    const element = $event.target as HTMLInputElement
    this.solicitud.apellidos = element.value;
  }
}
