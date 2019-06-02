import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../services/hospital/hospital.service';
import Hospital from '../../models/hospital.model';
import swal from 'sweetalert';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';


@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css']
})
export class HospitalesComponent implements OnInit {
  
  cargando :boolean = true;
  desde : number = 0;
  totalRegistro : number = 0;
  hospitales: Hospital[] = []
  constructor(
    public _hospitalService:HospitalService,
    public _modalUploadService: ModalUploadService
  ) { }

  ngOnInit() {
    this.cargarHospitales();
    this._modalUploadService.notificacion.subscribe(
      resp=> this.cargarHospitales()
    )
  }

  cargarHospitales(){
    this.cargando = true
    this._hospitalService.cargarHospitales(this.desde)
    .subscribe(
      ((resp:any)=>{
        this.totalRegistro = resp.total;
        this.hospitales = resp.Hospitales;
        this.cargando = false
      })
    )
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
   this.cargarHospitales()

  }

  buscaHospitales(termino:string){
    if(termino.length <=0 ){
      this.cargarHospitales();
      return 
    }
    this.cargando = true;
    this._hospitalService.buscarHospitales(termino).subscribe(
      ((hospitales:Hospital[])=>{
        
            this.hospitales = hospitales;                   
             this.cargando = false
      })
    )

  }

  actualizarHospital(hospital:Hospital){
    console.log(hospital);
    this._hospitalService.actualizarHospital(hospital)
                          .subscribe(
                            
                          );
  }

  borrarHospital(hospital:Hospital){
    swal({
      title: "¿Está seguro?",
      text: `Esta a punto de borrar el hospital ${hospital.nombre}`,
      icon: `warning`,
      buttons:  ['Cancelar', 'Aceptar'],
      dangerMode: true,
    }).then((borrar) => {        
      if (borrar) {
        this._hospitalService.borrarHospital(hospital._id).subscribe((resp:any)=>{
            console.log(resp);
            this.cargarHospitales();
        })  
      } 
    });    
  }

  nuevoHospital(){
    swal({
      title: "Nuevo Hospital",
      content: {
        element: "input",
        button : {
          text: "Agregar",
          closeModal: false,
        }        
        },            
      })
    .then(nombreHospital => {
      if (!nombreHospital) {  
        return;      
      }else{
        this._hospitalService.nuevoHospital(nombreHospital).subscribe(
          (resp:any)=>{
            this.cargarHospitales();
          }
        )
        
      }
    });

  }


  mostrarModalHospital(id:string){
    this._modalUploadService.mostrarModal('hospitales',id);
  }

}
