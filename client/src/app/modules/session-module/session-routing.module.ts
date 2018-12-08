import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/guards/auth.guard';
import { SessionComponent } from './session.component'
import { CreateSessionComponent } from './components/create-session/create-session.component'

const routes: Routes = 
[
  {
    path: 'sessions',
    canActivate: [AuthGuard],
    component: SessionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule {}
