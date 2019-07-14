import { ProfileComponent } from './profile/profile.component';
import { RouterModule,Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from './rxjs/rxjs.component';

//Guards
import { LoginGuardGuard, AdminGuard } from "../services/index.service";
//MANTENIMIENTO
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { VerificaTokenGuard } from '../services/guards/verifica-token.guard';


const pageRoutes : Routes = [
  // { path : '', 
  // component : PagesComponent,
  // canActivate : [LoginGuardGuard],
  // children : [
    { 
      canActivate : [VerificaTokenGuard],
      path: 'dashboard', 
      component: DashboardComponent, 
      data : { titulo :'Dashboard'}
    },
    { 
      canActivate : [VerificaTokenGuard],
      path: 'progress', 
      component: ProgressComponent, 
      data : { titulo :'Progress'}
    },
    {       
      canActivate : [VerificaTokenGuard],
      path: 'graficas1', 
      component: Graficas1Component, 
      data : { titulo :'Gráficas'}
    },
    { 
      canActivate : [VerificaTokenGuard],
      path: 'promesas', 
      component: PromesasComponent, 
      data : { titulo :'Promesas'}
    },
    { 
      canActivate : [VerificaTokenGuard],
      path: 'rxjs', 
      component: RxjsComponent, 
      data : { titulo :'RxJS'} 
    },
    {
      canActivate : [VerificaTokenGuard], 
      path: 'account', 
      component: AccountSettingsComponent, 
      data : { titulo :'Ajustes del tema'}
    },
    { 
      canActivate : [VerificaTokenGuard],
      path: 'profile', 
      component : ProfileComponent, 
      data : {titulo : 'Perfil de usuario'}
    },
    { 
      canActivate : [VerificaTokenGuard],
      path: 'busqueda/:termino', 
      component : BusquedaComponent, 
      data : {titulo : 'Buscador'}
    },
    //MANTENIMIENTO
    { 
      path: 'usuarios', 
      canActivate :[AdminGuard, VerificaTokenGuard],
      component : UsuariosComponent, 
      data : {titulo : 'Mantenimiento de usuarios'}
    
    },
    { 
      canActivate : [VerificaTokenGuard],
      path: 'hospitales', 
      component : HospitalesComponent, 
      data : {titulo : 'Mantenimiento de hospitales'}
    },
    { path: 'medicos', component : MedicosComponent, data : {titulo : 'Mantenimiento de medicos'}},
    { path: 'medico/:id', component : MedicoComponent, data : {titulo : 'Actualizar medico'}},
    { path: '', redirectTo: '/dashboard', pathMatch : 'full'},
  // ]}
];



  // const pageRoutes : Routes = [
  //     { path : '', 
  //     component : PagesComponent,
  //     canActivate : [LoginGuardGuard],
  //     children : [
  //       { path: 'dashboard', component: DashboardComponent, data : { titulo :'Dashboard'}},
  //       { path: 'progress', component: ProgressComponent, data : { titulo :'Progress'}},
  //       { path: 'graficas1', component: Graficas1Component, data : { titulo :'Gráficas'}},
  //       { path: 'promesas', component: PromesasComponent, data : { titulo :'Promesas'}},
  //       { path: 'rxjs', component: RxjsComponent, data : { titulo :'RxJS'} },
  //       { path: 'account', component: AccountSettingsComponent, data : { titulo :'Ajustes del tema'}},
  //       { path: 'profile', component : ProfileComponent, data : {titulo : 'Perfil de usuario'}},
  //       { path: 'busqueda/:termino', component : BusquedaComponent, data : {titulo : 'Buscador'}},
  //       //MANTENIMIENTO
  //       { 
  //         path: 'usuarios', 
  //         canActivate :[AdminGuard],
  //         component : UsuariosComponent, 
  //         data : {titulo : 'Mantenimiento de usuarios'}
        
  //       },
  //       { path: 'hospitales', component : HospitalesComponent, data : {titulo : 'Mantenimiento de hospitales'}},
  //       { path: 'medicos', component : MedicosComponent, data : {titulo : 'Mantenimiento de medicos'}},
  //       { path: 'medico/:id', component : MedicoComponent, data : {titulo : 'Actualizar medico'}},
  //       { path: '', redirectTo: '/dashboard', pathMatch : 'full'},
  //     ]          
  //   }];

export const PAGES_ROUTE = RouterModule.forChild( pageRoutes );