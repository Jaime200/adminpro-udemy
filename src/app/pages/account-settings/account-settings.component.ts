import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/index.service';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _ajustes:SettingsService) { }

  ngOnInit() {
    this.colocarCheck()
  }


  cambiarColor(tema:string, link:any ){
    this.aplicarCheck(link);
    console.log(tema);    
    this._ajustes.aplicarTema(tema)
  }

  aplicarCheck( link:any){
    let selectores: any = document.getElementsByClassName('selector')
    for(let ref of selectores ){
      ref.classList.remove('working');
    }

    link.classList.add('working')
  }


  colocarCheck(){
    let selectores: any = document.getElementsByClassName('selector')
    for(let ref of selectores ){
      //console.log( `${this._ajustes.ajustes.tema} === ${ref.getAttribute('data-theme')}`)
      if(this._ajustes.ajustes.tema === ref.getAttribute('data-theme')){
        ref.classList.add('working')
        break;
      }
    }
  }



}
