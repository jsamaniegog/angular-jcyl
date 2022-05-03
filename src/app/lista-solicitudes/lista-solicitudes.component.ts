import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-solicitudes',
  templateUrl: './lista-solicitudes.component.html',
  styleUrls: ['./lista-solicitudes.component.css']
})
export class ListaSolicitudesComponent implements OnInit {

  @Input() solicitudes: any;

  @Output() deleted = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  borrarSolicitud(indexToRemove: number) {
    this.deleted.emit(indexToRemove)
  }
}
