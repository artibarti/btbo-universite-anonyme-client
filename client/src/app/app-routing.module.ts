import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = 
[
  {
    path: 'login',
    loadChildren: './modules/welcome-module/welcome.module#WelcomeModule',
  },
  {
    path: 'home',
    loadChildren: './modules/home-module/home.module#HomeModule',
    canLoad: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
