import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-centro',
  templateUrl: './centro.component.html',
  styleUrls: ['./centro.component.css']
})

export class CentroComponent implements OnInit {
  @Input() centro: any;
  @Input() isSelected: Boolean = false;

  @Output() selected = new EventEmitter();


  constructor(private route: ActivatedRoute) {
    route.params.subscribe(
      params => this.centro = {nombre: params['idCentro']}
    )
  }

  ngOnInit(): void {
  }

  centroSeleccionado(centro: Object) {
    this.selected.emit(centro);
  }

}
