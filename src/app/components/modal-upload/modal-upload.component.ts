import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { SubirArchivoService } from '../../services/subirArchivo/subir-archivo.service';
import { ModalUploadService } from './modal-upload.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {

  
  public imagenSubir : File;
  public imagenTemp: string;

  constructor(
    public _subirArchiboService: SubirArchivoService,
    public _modalUploadService:ModalUploadService
  ) {
    console.log('Modal Listo')
   }


  ngOnInit() {
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

  subirImagen(){

    this._subirArchiboService.subirArchivo(this.imagenSubir ,this._modalUploadService.tipo, this._modalUploadService.id)
    .subscribe(
      (resp: any)=>{     

        this._modalUploadService.notificacion.emit(resp);
        //this._modalUploadService.ocultarModal();
        this.cerrarModal();
        
        //swal('Imagen actualizada',`La imagen del usuario se ha actualizado`,'success');                
      }

    );
    
  }

  cerrarModal(){
    this.imagenTemp = null;
    this.imagenSubir = null;

    this._modalUploadService.ocultarModal();
  }

}
