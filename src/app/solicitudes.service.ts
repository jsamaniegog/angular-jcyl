import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  constructor() { }

  getSolicitudes() {
    return [
      {
        fecha: new Date(),
        nombre: 'Roberto',
        apellidos: 'Baggio',
        centro: 'Roma',
      },
      {
        fecha: new Date(),
        nombre: 'Zinedine',
        apellidos: 'Zidane',
        centro: 'Paris',
      }
    ]
  }
}
