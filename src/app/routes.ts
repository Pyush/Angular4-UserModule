import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth-guard.guard";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [

  {path: '', redirectTo: 'home', canActivate: [AuthGuard], pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: []
  },
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules, useHash: true
});

