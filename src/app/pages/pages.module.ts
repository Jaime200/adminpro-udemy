import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//ng2-charts
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';



//Pipe Module
import { PipesModule } from '../pipes/pipes.module';

//Rutas
import { PAGES_ROUTE } from './pages.routes';
//Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
// import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';




@NgModule({

    declarations : [        
        // PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        ProfileComponent,
        UsuariosComponent,
        // ModalUploadComponent,
        HospitalesComponent,
        MedicosComponent,
        MedicoComponent,
        BusquedaComponent
    ],
    exports : [
        // PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports : [
        SharedModule,
        PAGES_ROUTE,
        FormsModule,    
        ReactiveFormsModule,
        ChartsModule,
        PipesModule,
        CommonModule
        
    ]
})

export class PagesModule { }

