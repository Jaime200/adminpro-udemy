import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//temporal
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Routas
import { APP_ROUTE } from './app.routes';

//Modulos
import { PagesModule } from './pages/pages.module';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

//Servicios
import { ServiceModule } from './services/service.module';

// import { IncrementadorComponent } from './components/incrementador/incrementador.component';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,    
    RegisterComponent, 
    PagesComponent
    // IncrementadorComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTE,    
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
