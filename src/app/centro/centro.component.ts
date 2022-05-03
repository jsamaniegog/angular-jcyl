import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-centro',
  templateUrl: './centro.component.html',
  styleUrls: ['./centro.component.css']
})

export class CentroComponent implements OnInit {
  @Input() centro: any;
  @Input() isSelected: Boolean = false;

  @Output() selected = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  centroSeleccionado(centro: Object) {
    this.selected.emit(centro);
  }

}
