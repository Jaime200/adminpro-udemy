import { Injectable } from '@angular/core';
import Usuario from '../../models/usuario.model';
import { URL_SERVICIOS } from '../../config/config';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import swal from 'sweetalert';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario:Usuario
  token:string
  constructor(
    public http: HttpClient,
    public  router:Router    
  ) {
    console.log('Servicio de usuario iniciado')
    this.cargarStorage();
   }

   isLogin(){
    return this.token.length>5 ? true:false;
   }

   cargarStorage(){
     if(localStorage.getItem('token')){
       this.token = localStorage.getItem('token');
       this.usuario = JSON.parse(localStorage.getItem('usario'));
     }else{
       this.token = '';
       this.usuario = null;
     }
   }


   guardarStorage(resp:any){
    this.token = resp.token
    localStorage.setItem('id',resp.UsuarioBD._id)
    localStorage.setItem('token',resp.token)
    localStorage.setItem('usario',JSON.stringify(resp.UsuarioBD))
   }

   login(usuario:Usuario, recordar: boolean = false){
    let url =   `${URL_SERVICIOS}/login`
    if(recordar){
      localStorage.setItem('email', usuario.email)
    }else{
      localStorage.removeItem('email')
    }
    return this.http.post( url, usuario)
                    .pipe(
                      map( (resp:any) =>{
                        console.log(resp)                         
                        this.guardarStorage(resp)
                          return true
                      })
                    );
   }

   loginGoogle(token:string){
     
    let url =   `${URL_SERVICIOS}/login/google`    
    return this.http.post( url, {token} )
              .pipe(
                map((resp:any)=>{                  
                  this.guardarStorage(resp)
                  return true
                })
              )
   }

   logout(){
     this.usuario = null;
     this.token = ''
     localStorage.removeItem('token')
     localStorage.removeItem('usuario')
      this.router.navigate(['/login'])
   }

   addUsuario(usuario: Usuario){
    let url =   `${URL_SERVICIOS}/usuario`
    return this.http.post(url, usuario)
                    .pipe(
                      map( (resp: any) => {
                        swal('Usuario creado', resp.usuario.email, 'success')
                      return resp.usuario;
                    }));
                    
   }

   getLocalStorageEmail(): string {
     return localStorage.getItem('email') || ''
   }

   
}
