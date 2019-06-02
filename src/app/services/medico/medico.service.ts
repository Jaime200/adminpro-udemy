import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { UsuarioService } from '../usuario/usuario.service';
import swal from 'sweetalert';
import { Medico } from '../../models/medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor( public http:HttpClient,
    public  _usuariosService:UsuarioService
    ) { }

  cargarMedicos(desde:number){
    let url = `${URL_SERVICIOS}/medico?desde=${desde}`;
    return this.http.get(url)
  }

  buscarMedicos(termino:string){
    let url = `${URL_SERVICIOS}/busqueda/todo/collecion/medicos/${termino}`;
    return this.http.get(url).pipe(
     map((resp:any)=>resp.medicos)
   );
  }


  borrarMedicos(id:string){
    let url = `${URL_SERVICIOS}/medico/${id}?token=${this._usuariosService.token}`;
    return this.http.delete(url).pipe(
     map((resp:any)=>{
      swal('Médico borrado','Medico borrado correctamente','success');
      return resp
      })
   );
  }

  guardarMedico(medico:Medico){

    if(medico._id){
      let url = `${URL_SERVICIOS}/medico/${medico._id}?token=${this._usuariosService.token}`; 

      return this.http.put(url,medico).pipe(
        map( (resp:any)=>{
          swal('Medico Actualizado', `${medico.nombre}`,'success'); 
          
          return resp.medico;
        })
      )
    }
    else{
      let url = `${URL_SERVICIOS}/medico?token=${this._usuariosService.token}`; 
      return this.http.post(url,medico).pipe(
                      map((resp:any)=>{
                        swal('Medico Creado', `${medico.nombre}`,'success');                      
                        return resp.medico;
                      })
      )  
    }
    
  }

  cargarMedico(id:string){
    let url = `${URL_SERVICIOS}/medico/${id}`; 
    return this.http.get(url)
                    .pipe(
                      map((resp:any)=>{
                        return resp.medico
                      })
                    );
  }

  
}
