import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-centro',
  template: `<h1><strong>{{centro.nombre}}</strong></h1>`,
  styleUrls: ['./centro.component.css']
})

export class CentroComponent implements OnInit {
  @Input() centro: any;

  constructor() { }

  ngOnInit(): void {
  }

}
