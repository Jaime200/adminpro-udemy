import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';
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
    LoginGuardGuard, ModalUploadService
  ]
})
export class ServiceModule { }
