import { UsuarioService } from './../../services/index.service';
import { Component, OnInit } from '@angular/core';
import Usuario from '../../models/usuario.model';
import swal from 'sweetalert';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  public usuario: Usuario;
  public imagenSubir : File;
  public imagenTemp: string;
  constructor(
    private _usuarioService:UsuarioService
  ) { 

    this.usuario = this._usuarioService.usuario

  }

  ngOnInit() {
  }

  saveProfile(ProfileUser: Usuario){
    
    this.usuario.nombre = ProfileUser.nombre;

    if(!this.usuario.google){
      this.usuario.email = ProfileUser.email
    }   

    this._usuarioService.updateUsuario(this.usuario)
                        .subscribe()
  }

  seleccionarImagen(archivo:File){
    if (!archivo){
      this.imagenSubir = null;
      swal('Imagen','Debe seleccionar una imagen','warning')
    }

    if(archivo.type.indexOf('image')<0){
      swal('Imagen no válida','Debe seleccionar una imágen','warning')
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL(archivo);

    reader.onloadend = ()=> this.imagenTemp = reader.result.toString() ;
    
   
  }

  cambiarImagen(){
    console.log('click')
    this._usuarioService.cambiarImagen(this.imagenSubir,this._usuarioService.usuario._id)
  }

}
