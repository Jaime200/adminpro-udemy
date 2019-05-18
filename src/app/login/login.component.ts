import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/index.service';
import Usuario from '../models/usuario.model';

//Solucion de luisiño
import { NgZone } from '@angular/core';
declare function init_plugins();
declare const gapi : any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recuerdame:boolean = false;
  email:string ;
  auth2: any
  constructor(
    public router: Router ,
    public _usuarioService: UsuarioService,
    //Solucion de luisiño
    private zone: NgZone 
    ) { 

    }
  
  ngOnInit() {
    init_plugins();
    this.google_init()
      this.email = this._usuarioService.getLocalStorageEmail()
      this.email.length >0 ? this.recuerdame = true: this.recuerdame = false;
      
  }

  google_init(){
    gapi.load('auth2', ()=>{
      this.auth2 = gapi.auth2.init({
        client_id: '395702237659-nd1m246tlu9g41ko9ui4bgud4jls54em.apps.googleusercontent.com',
        cookiepolicy:'single:hot_origin',
        scope:'profile email'
      });
      this.attachSignin(document.getElementById('btnGoogle'))
    })
  }

  attachSignin(element){
    this.auth2.attachClickHandler(element, {}, (googleUser) =>{
      let profile = googleUser.getBasicProfile();
      
      let token = googleUser.getAuthResponse().id_token
      //Solucion de luisiño
      this.zone.run( () => {        
        this._usuarioService.loginGoogle( token )
            .subscribe( isLogado => this.router.navigate( [ '/dashboard' ] ) );
        });

    });
  }

  ingresar(forma:NgForm){
    
    if(!forma.valid){
      return
    }

    let usuario = new Usuario(null
                              , forma.value.email
                              , forma.value.password);

    this._usuarioService.login(usuario, forma.value.recuerdame)
                        .subscribe(ok => this.router.navigate(['/dashboard']))
    //this.router.navigate(['/dashboard'])
  }

  register(){
    
    this.router.navigate(['/register'])
  }

}
