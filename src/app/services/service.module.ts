import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';
import { 
  SharedService, SidebarService, SettingsService, UsuarioService,SubirArchivoService,
  LoginGuardGuard,HospitalService, MedicoService ,AdminGuard, VerificaTokenGuard
} from './index.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule 
  ],
  providers:[
    SharedService, SidebarService, SettingsService, UsuarioService, SubirArchivoService,
    LoginGuardGuard, AdminGuard, ModalUploadService,HospitalService, MedicoService,VerificaTokenGuard
  ]
})
export class ServiceModule { }
