import { UsuarioService } from './../usuario/usuario.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor(
    public _usuarioService: UsuarioService,
    public router:Router
  ){

  }
  canActivate():  boolean {
    
    if(this._usuarioService.isLogin()){
      console.log('Pasó por el Guard')
      return true;
    }else{
      
      console.log('Bloqueado por el Guard')
      this.router.navigate(['/login'])
      return false;
    }

    
  }
}
