import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = 
[
  {
    path: 'login',
    loadChildren: './modules/welcome-module/welcome.module#WelcomeModule',
  },
  {
    path: 'home',
    loadChildren: './modules/home-module/home.module#HomeModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
