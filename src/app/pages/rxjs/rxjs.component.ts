import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription
  constructor() {
         
    this.subscription = this.regresaObservable()  
      //.pipe(
      // retry(2)
     // )
      .subscribe(
      numero=>{ console.log('Subs ',numero)}, 
      err => { console.error('Error', err)},
      () => { console.log('El observador terminó')}      
    );
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log('RXJS se cerrará')
    this.subscription.unsubscribe();
  }

  regresaObservable() : Observable < any  > {
                      //observer: Subscriber
        //const obs = new Observable( (observer : Subscriber<Number>) => {
          return new Observable( (observer : Subscriber<any>) => {

          let contador = 0;    
          
          const intervalo = setInterval( ()=>{    
            
            contador ++;  

            let salida = {
              valor : contador
            }             

            observer.next(salida);

            // if(contador === 3){

            //   clearInterval(intervalo);
            //   observer.complete();

            // }    
            // if(contador === 2){
            //   //clearInterval(intervalo);
            //   observer.error('Auxilio');
            // }
          },1000);
    
        }).pipe(
          map( resp => {return resp.valor; }),
          filter( ( valor , index:number) =>{ 
            //console.log('Filter ', valor, index);

            if( (valor % 2 )===1 ){
              return true
            }
            else { 
              return false
            }
          })
        )
  }

}
