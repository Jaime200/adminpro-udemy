import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HospitalService } from '../../services/index.service';
import { MedicoService } from '../../services/index.service';
import { map } from 'rxjs/internal/operators/map';
import Hospital from '../../models/hospital.model';
import { Medico } from '../../models/medico.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent implements OnInit {

  public hospitales:Hospital[] = [];
  medico:Medico = new Medico('','','','','');
  hospital : Hospital = new Hospital('');

  constructor(
    public _meidocoService:MedicoService,
    public _hospitalService:HospitalService,
    public _modalUploadService:ModalUploadService,
    public router:Router,
    public activatedRouter: ActivatedRoute
    
  ) { 
    this.activatedRouter.params.subscribe((params:Params) => {
      let id = params['id'];
      if(id !=='nuevo'){
        this.cargarMedico(id);
      }

    })
  }

  ngOnInit() {
    this._hospitalService.cargarHospitales(0)    
                         .subscribe(
                          (resp:any)=>{
                            this.hospitales =resp.Hospitales
                          }   
                          )
    this._modalUploadService.notificacion
                            .subscribe( resp=>{                              
                              this.medico.img = resp.medicos.img
                            })

  }

  guardarMedico(f:NgForm){
  console.log(f.valid);
  if(f.invalid){
    return;
  }
  this._meidocoService.guardarMedico(this.medico).subscribe(
    (medico: any)=>{
      console.log(medico)
      this.medico._id = medico._id;
      this.router.navigate(['medico',medico._id]);
    }
  );  
  }

  cambioHospital(id:string){
    
    this._hospitalService.obtenerHospital(id)
                          .subscribe(
                            ((resp:any)=>{                             
                             this.hospital = resp;
                            })
                          )
  }

  cargarMedico(id:string){
    this._meidocoService.cargarMedico(id).subscribe(
    
      (medico)=> {
        
        this.medico = medico
        this.medico.hospital = medico.hospital._id
        this.cambioHospital(this.medico.hospital)
      }
    );
  }

  cambiarFoto(){
    this._modalUploadService.mostrarModal('medicos',this.medico._id);
  }

}
