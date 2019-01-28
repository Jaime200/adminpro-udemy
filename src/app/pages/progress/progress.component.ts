import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  procentaje1: number = 20;
  procentaje2: number = 50;
  constructor() { }

  ngOnInit() {
  }
  actualizarValor(event: number) {
    console.log(event)
  }
  // cambiarValor( valor:number){

  //   if ( this.procentaje >= 100 && valor > 0 ) {
  //     this.procentaje = 100  
  //     return
  //   }

  //   if ( this.procentaje <= 0 && valor < 0  ) {
  //     this.procentaje = 0
  //     return
  //   }

  //   this.procentaje = this.procentaje + valor

  // }


}
