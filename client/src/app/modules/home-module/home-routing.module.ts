import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component'
import { AuthGuard } from '../../shared/guards/auth.guard';

const routes: Routes = 
[
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
