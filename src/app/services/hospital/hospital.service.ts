import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import swal from 'sweetalert';
import { UsuarioService } from '../usuario/usuario.service';
import Hospital from '../../models/hospital.model';
@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(
    public http:HttpClient,
    private _usuariosService:UsuarioService
  ) { }

  cargarHospitales(desde:number){
    let url =   `${URL_SERVICIOS}/hospital?desde=${desde}`;
    return this.http.get( url );
   }

   buscarHospitales(termino:string){
     let url = `${URL_SERVICIOS}/busqueda/todo/collecion/hospitales/${termino}`;
     return this.http.get(url).pipe(
      map((resp:any)=>resp.hospitales)
    );
   }

   obtenerHospital(id:string){
    let url = `${URL_SERVICIOS}/hospital/${id}`
    return this.http.get(url)
                    .pipe(
                      map((resp:any) =>{                        
                        return resp.Hospital
                      })
                    );
   }

  borrarHospital(id:string){
    let url = `${URL_SERVICIOS}/hospital/${id}?token=${this._usuariosService.token}`;
    return this.http.delete(url)
                    .pipe(
                      map( (resp:any) =>{
                        swal('Hospital borrado',`El hospital ha sido borrado correctamente`, 'success')
                      })
                    )
  }

  nuevoHospital(nombre:string){
    let url = `${URL_SERVICIOS}/hospital?token=${this._usuariosService.token}`;
    return this.http.post(url,{nombre :nombre})
                    .pipe(
                      map( resp =>{
                        swal('Hospital creado',`El hospital ${nombre} ha sido creado correctamente`, 'success')
                      })
                    )
  }

  actualizarHospital(hospital:Hospital){
    let url = `${URL_SERVICIOS}/hospital/${hospital._id}?token=${this._usuariosService.token}`;

    return this.http.put(url,hospital)
                    .pipe(
                      map((resp:any)=> {
                        swal('Hospital Actualizado',`El hospital ${hospital.nombre} ha sido actualizado correctamente`, 'success')
                        return resp.hospital
                      })
                    );
  }

}
