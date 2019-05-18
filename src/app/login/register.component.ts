import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert';
import { UsuarioService } from '../services/index.service';
import Usuario from '../models/usuario.model';
import { Router } from '@angular/router';
declare function init_plugins();
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup
  constructor(
    public _usuarioService: UsuarioService,
    public router:Router
  ) { }

  sonIguales(campo1:string, campo2:string){    

    return (group: FormGroup) =>{
      let pass1  = group.controls[campo1].value
      let pass2  = group.controls[campo2].value

      if (pass1 === pass2){ 
              return null
        }
        
            return{
              sonIguales:true
            };
      
    }
  }
  ngOnInit() {
    init_plugins();
    this.forma = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      correo: new FormControl(null, [Validators.email, Validators.required]),
      password:new FormControl(null, Validators.required),
      password2:new FormControl(null, Validators.required),
      condiciones:new FormControl(false),
    }, { validators : this.sonIguales('password', 'password2') }
    
    )

    this.forma.setValue({
      nombre: 'test',
      correo:'test1@test1.com',
      password:'123',
      password2:'1234',
      condiciones: true
      
    })


  }

  registrarUsuarios(){
    console.log(this.forma.value.condiciones)
    // if(this.forma.invalid ){
    //   return;
    // }
    if(!this.forma.value.condiciones){
      console.log('debe aceptar  las condiciones');
      swal("Importante","debe aceptar las condiciones",'warning');
      return;
    }
    // console.log(this.forma.valid)
    // console.log(this.forma)
    let usuario =  new Usuario(
                                this.forma.value.nombre,
                                this.forma.value.correo,
                                this.forma.value.password                                
                              )

    this._usuarioService.addUsuario(usuario)
                        .subscribe(resp => this.router.navigate(['/login']));
  }

}
