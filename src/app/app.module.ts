import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AuthGuard} from "./auth-guard.guard";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {HomeComponent} from "./home/home.component";
import {routing} from "./routes";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {NavigationbarComponent} from "./navigationbar/navigationbar.component";
import { SafeHtmlPipePipe } from './safe-html-pipe.pipe';
import {ContenteditableModel} from "./contenteditable-model.directive";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavigationbarComponent,
    ContenteditableModel,
    SafeHtmlPipePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
