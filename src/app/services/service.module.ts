import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { 
  SharedService, SidebarService, SettingsService, UsuarioService,SubirArchivoService,
  LoginGuardGuard 
} from './index.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule 
  ],
  providers:[
    SharedService, SidebarService, SettingsService, UsuarioService, SubirArchivoService,
    LoginGuardGuard
  ]
})
export class ServiceModule { }
