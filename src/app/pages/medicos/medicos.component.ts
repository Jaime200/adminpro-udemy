import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../../services/index.service';
import { Medico } from 'src/app/models/medico.model';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: []
})
export class MedicosComponent implements OnInit {

  desde:number = 0;
  public cargando :boolean = true;
  public totalRegistro:number = 0;
  public medicos:Medico[] = [];
  
  constructor(
    public _medicosService:MedicoService
  ) { }

  ngOnInit() {
    this.cargarMedicos();
  }

  cargarMedicos(){
    this.cargando = true;
    this._medicosService.cargarMedicos(this.desde).subscribe(
      (resp:any)=>{
        this.cargando = false;
        this.totalRegistro = resp.total;
        this.medicos = resp.medico;
      }
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
   this.cargarMedicos()

  }


  buscarMedico(termino:string){
    if(termino.length <=0 ){
      this.cargarMedicos();
      return 
    }
    this.cargando = true;
    this._medicosService.buscarMedicos(termino).subscribe(
      ((medicos:Medico[])=>{
        
            this.medicos = medicos;                   
             this.cargando = false
      })
    )

  }

  borrarMedico(medico:Medico){
    this._medicosService.borrarMedicos(medico._id).subscribe(
      ()=>{
        this.cargarMedicos();
      }
    );
  }

}
