import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centro',
  template: `<h1><strong>{{centro.nombre}}</strong></h1>`,
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {

  centro = {
    nombre: 'Centro 1',
    descripcion: 'Primer centro.',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
