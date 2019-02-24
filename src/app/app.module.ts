import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,    
    RegisterComponent, 
    // IncrementadorComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTE,
    PagesModule,
    FormsModule,
    ServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
