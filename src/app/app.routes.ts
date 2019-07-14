//import { PagesModule } from './pages/pages.module';
import { RouterModule, Routes, CanActivate } from '@angular/router';

//Componentes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoudComponent } from './shared/nopagefoud/nopagefoud.component';
import { PagesComponent } from './pages/pages.component';
import { LoginGuardGuard } from './services/guards/login-guard.guard';

const appRoutes : Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    {
        path: '' ,
        component: PagesComponent,
        canActivate: [LoginGuardGuard ],
        loadChildren : './pages/pages.module#PagesModule',

    },
    { path: '**', component: NopagefoudComponent},
]

export const APP_ROUTE = RouterModule.forRoot(appRoutes,{ useHash: true })