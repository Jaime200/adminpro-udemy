import { Component, OnInit } from '@angular/core';
import Usuario from '../../models/usuario.model';
import { UsuarioService } from 'src/app/services/index.service';
import swal from 'sweetalert';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = []
  desde : number = 0
  totalRegistro : number = 0
  cargando: boolean = true
  rolesValidos = [
    {
      name:'ADMIN_ROLE',
      value:'ADMIN_ROLE'
    },
    {
      name:'USER_ROLE',
      value:'USER_ROLE'
    }
  ]
  constructor(
    public _usuariosService:UsuarioService,
    public _modalUploadService: ModalUploadService
  ) { }

  ngOnInit() {
    this.cargarUsuarios();
    this._modalUploadService.notificacion.subscribe(
      resp=> this.cargarUsuarios()
    )
  }

  cargarUsuarios(){
    this.cargando = true
    this._usuariosService.cargarusuarios(this.desde)
                        .subscribe( (resp: any)=>{
                            console.log(resp);
                            this.totalRegistro = resp.total;
                            this.usuarios = resp.usuarios;
                            this.cargando = false
                        })
  }

  cambiarDesde(valor:number){
    let  desde = this.desde + valor;
    if (desde >= this.totalRegistro){
      return;
    }
    if(desde < 0 ){      
      return
    }
    this.desde += valor
   this.cargarUsuarios()

  }

  buscarUsuario(termino:string){
    if(termino.length <=0 ){
      this.cargarUsuarios();
      return 
    }
    console.log(termino)
    this.cargando = true
   this._usuariosService.buscarUsuarios(termino)
                        .subscribe((usuarios:Usuario[])=>{
                          console.log(usuarios)       
                          this.usuarios = usuarios                   
                          this.cargando = false
                        })
  }

  borrarUsuario(usuario:Usuario){
    console.log(usuario)
    if(usuario._id === this._usuariosService.usuario._id){
      swal('Error al borrar al usuario','No se puede borrar a sí mismo','error')
      return
    }
      swal({
        title: "¿Está seguro?",
        text: `Esta a punto de borrar el usuario ${usuario.nombre}`,
        icon: `warning`,
        buttons:  ['Cancelar', 'Aceptar'],
        dangerMode: true,
      }).then((borrar) => {
        console.log(borrar)
        if (borrar) {
          this._usuariosService.borrarUsuario(usuario._id).subscribe((resp:any)=>{
              console.log(resp);
              this.cargarUsuarios();
          })
        } 
      });    
    

  }

  actualizarUsuario(usuario:Usuario){
    this._usuariosService.updateUsuario(usuario)
                          .subscribe();
  }

  mostrarModal(id:string){
    this._modalUploadService.mostrarModal('usuarios',id);
  }

}
