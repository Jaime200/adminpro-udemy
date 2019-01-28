import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtPorcentaje') txtPorcentaje: ElementRef
  @Input() porcentaje: number = 50;
  @Input() leyenda : String = "Leyenda"

  @Output() cambioValor: EventEmitter<number> =  new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onChange( newValue:number) {
    // console.log(this.txtPorcentaje)
    // console.log(`valor de % ${this.porcentaje}`)
    //let elementHTMl :any = document.getElementsByName("porcentaje")[0];

    if(newValue >=100){
      this.porcentaje = 100;
    }else if (newValue < 0){
      this.porcentaje = 0;
    } else{
      this.porcentaje = newValue;
    }
    //elementHTMl.value= this.porcentaje;
    this.txtPorcentaje.nativeElement.value = this.porcentaje
   
    
    this.cambioValor.emit(this.porcentaje)
    
  }

  cambiarValor( valor:number){

    if ( this.porcentaje >= 100 && valor > 0 ) {
      this.porcentaje = 100  
      return
    }

    if ( this.porcentaje <= 0 && valor < 0  ) {
      this.porcentaje = 0
      return
    }

    this.porcentaje = this.porcentaje + valor
    this.cambioValor.emit(this.porcentaje)
    this.txtPorcentaje.nativeElement.focus();
  }

}
