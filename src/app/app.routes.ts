import { RouterModule,Routes } from '@angular/router';

//Componentes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoudComponent } from './shared/nopagefoud/nopagefoud.component';

const appRoutes : Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', component: NopagefoudComponent},
]

export const APP_ROUTE = RouterModule.forRoot(appRoutes,{ useHash: true })