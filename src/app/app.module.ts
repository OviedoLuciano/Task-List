import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { ButtonComponent } from './Componentes/button/button.component';
import { TasksComponent } from './Componentes/tasks/tasks.component';
import { TasksItemComponent } from './Componentes/tasks-item/tasks-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './Componentes/add-task/add-task.component';
import {FormsModule} from '@angular/forms';
import { BackgroundComponent } from './Componentes/background/background.component';
import { HomeComponent } from './Componentes/home/home.component';
import { LoginComponent } from './Componentes/login/login.component';
import { NavComponent } from './Componentes/nav/nav.component';
import { interceptorProvider } from './Servicios/interceptor-service';
import { RegistrarseComponent } from './Componentes/registrarse/registrarse.component';
import { AboutComponent } from './Componentes/about/about.component';
import { FooterComponent } from './Componentes/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TasksItemComponent,
    AddTaskComponent,
    BackgroundComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    RegistrarseComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
