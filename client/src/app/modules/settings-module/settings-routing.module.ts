import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/guards/auth.guard';
import { SettingsComponent } from './settings.component';
import { EditAccountComponent } from './components/edit-account/edit-account.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { InviteComponent } from './components/invite/invite.component';
import { DonateComponent } from './components/donate/donate.component';

const routes: Routes = 
[
  {
    path: 'settings',
    canActivate: [AuthGuard],
    component: SettingsComponent,
    children:
    [
      {
        path: 'account',
        canActivate: [AuthGuard],
        component: EditAccountComponent
      },
      {
        path: 'profile',
        canActivate: [AuthGuard],
        component: EditProfileComponent
      },
      {
        path: 'invite',
        canActivate: [AuthGuard],
        component: InviteComponent
      },
      {
        path: 'donate',
        canActivate: [AuthGuard],
        component: DonateComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
