import { NgModule  } from '@angular/core';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ChartsModule } from 'ng2-charts';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
//Rutas
import { PAGES_ROUTE } from './pages.routes';
//Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({

    declarations : [        
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccountSettingsComponent
    ],
    exports : [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports : [
        SharedModule,
        PAGES_ROUTE,
        FormsModule,    
        ReactiveFormsModule,
        ChartsModule
        
    ]
})

export class PagesModule { }

