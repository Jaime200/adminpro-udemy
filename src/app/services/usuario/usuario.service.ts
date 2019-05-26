import { Injectable } from '@angular/core';
import Usuario from '../../models/usuario.model';
import { URL_SERVICIOS } from '../../config/config';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../subirArchivo/subir-archivo.service';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario:Usuario
  token:string
  constructor(
    public http: HttpClient,
    public  router:Router,
    public _subirArchivoService: SubirArchivoService
  ) {
    //console.log('Servicio de usuario iniciado')
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
    this.usuario = resp.UsuarioDB    
    
    localStorage.setItem('id',resp.UsuarioDB._id)
    localStorage.setItem('token',resp.token)
    localStorage.setItem('usario',JSON.stringify(resp.UsuarioDB))
   }

   guardarStorageUsuario(usuario:Usuario){
    //this.usuario =usuario   
    localStorage.setItem('usario',JSON.stringify(usuario))
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
                        console.log(resp)
                        swal('Usuario creado', resp.UsuarioDB.email, 'success')
                      return resp.usuario;
                    }));
                    
   }

   updateUsuario(usuario:Usuario){
    let url =   `${URL_SERVICIOS}/usuario/${this.usuario._id}?token=${this.token}`    
    
    return this.http.put(url, usuario)
                    .pipe(
                      map((resp:any)=>{                        
                         
                        if(usuario._id === this.usuario._id){
                          this.guardarStorage(resp)
                        }
                        
                        swal('Usuario actualizado',usuario.nombre,'success');
                        return true
                      })
                    )
   }

   getLocalStorageEmail(): string {
     return localStorage.getItem('email') || ''
   }

   cambiarImagen(Archivo:File, id:string){
      this._subirArchivoService.subirArchivo(Archivo,'usuarios',id).subscribe(
       (resp: any)=>{
         this.usuario.img = resp.usuarios.img
         swal('Imagen actualizada',`La imagen del usuario ${this.usuario.nombre} se ha actualizado`,'success');
         console.log(resp)
         this.guardarStorageUsuario(resp.usuarios)
       }
     )
   }

   cargarusuarios(desde:number){
    let url =   `${URL_SERVICIOS}/usuario?desde=${desde}`
    return this.http.get( url )
   }

   buscarUsuarios(termino:string){
    let url =   `${URL_SERVICIOS}/busqueda/todo/collecion/usuarios/${termino}`    
    return this.http.get(url)
                    .pipe(
                      map((resp:any)=>resp.usuarios)
                    )
   }

   borrarUsuario(id:string){
     let url = `${URL_SERVICIOS}/usuario/${id}?token=${this.token}`
     console.log(url)
     return this.http.delete(url)
                      .pipe(
                        map( resp =>{
                          swal('Usuario borrado','El usuario ha sido borrado correctamente', 'success')
                        })
                      )

   }
   
}
