import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/guards/auth.guard';
import { SessionComponent } from './session.component';
import { CreateSessionComponent } from './components/create-session/create-session.component';
import { ActiveSessionComponent } from './components/active-session/active-session.component';

const routes: Routes =
[
  {
    path: 'session',
    canActivate: [AuthGuard],
    component: SessionComponent,
    children: [
      {
        path: 'create/:id',
        canActivate: [AuthGuard],
        component: CreateSessionComponent,
      },
      {
        path: 'active/:id',
        canActivate: [AuthGuard],
        component: ActiveSessionComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule {}
