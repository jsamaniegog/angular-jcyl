import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selector-centro',
  templateUrl: './selector-centro.component.html',
  styleUrls: ['./selector-centro.component.css']
})
export class SelectorCentroComponent implements OnInit {

  @Output() selected = new EventEmitter();

  centros = [{nombre: "Fernando de Rojas"}, {nombre: "Agustinas"}];

  centrosFiltrados: any;
  centroSeleccionado: any;

  constructor() {
    this.centrosFiltrados = this.centros;
  }

  ngOnInit(): void {
  }

  centro(event: KeyboardEvent) {
    let target = (event.target as HTMLInputElement)
    this.centrosFiltrados = [...this.centros].filter(centro => centro.nombre.includes(target.value))
  }

  seleccionarCentro(centro: any) {
    this.centroSeleccionado = centro
    this.selected.emit(centro)
  }

}
