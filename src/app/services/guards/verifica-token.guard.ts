import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UsuarioService } from '../usuario/usuario.service';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class VerificaTokenGuard implements CanActivate {

  constructor(
    public _usuarioService:UsuarioService,
    public router:Router    
    ){

  }


  canActivate():  Promise<boolean> | boolean {
    console.log('Token Guard')
    let token = this._usuarioService.token;

    //contenido del token
    let payload = jwt_decode(token);
    //let payload = atob((token.split('.')[1]));//JSON.parse(atob(token.split(',')[1]));
    console.log(payload)

    if(this.expirado(payload['exp'])){
      this._usuarioService.logout();
      return false;
    }

      return this.verificaRenueva(payload['exp'])
  }

  expirado(fechaExp:number): boolean{
    let ahora = new Date().getTime()/1000;
    if(fechaExp < ahora){
      return true
    }
    else{
      return false;
    }
  }

  verificaRenueva(fechaExp:number): Promise<boolean>{

    return new Promise((resolve,reject)=>{
      let tokenExp = new Date(fechaExp * 1000) ;      
      let ahora = new Date();

      ahora.setTime( ahora.getTime() + (4 * 60 * 60 * 1000));
      console.log(tokenExp)
      console.log(ahora)

      if(tokenExp.getTime() >= ahora.getTime() ){
        resolve(true);
      }else{
        this._usuarioService.renuevaToken().subscribe(
          (resp)=>{
            resolve(true);
          },
          (err)=>{
            this._usuarioService.logout();
            reject(false);
          }
        )
      }
      resolve(true);
    })

  }
}
