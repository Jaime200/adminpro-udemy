import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/index.service';
import Usuario from '../../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  usuario:Usuario
  constructor(public _usuarioService:UsuarioService,
    public router:Router
    ) { }

  ngOnInit() {
    this.usuario = this._usuarioService.usuario
    
  }
  buscar(termino:string){ 
    if(termino.trim().length ===0){
      return;
    }
    this.router.navigate([`/busqueda`,termino])
  }


}
