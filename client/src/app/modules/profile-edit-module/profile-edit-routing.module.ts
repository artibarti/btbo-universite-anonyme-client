import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/guards/auth.guard';
import { ProfileEditComponent } from './profile-edit.component';
import { EditAccountComponent } from './components/edit-account/edit-account.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { InviteComponent } from './components/invite/invite.component';
import { DonateComponent } from './components/donate/donate.component';

const routes: Routes = 
[
  {
    path: 'profile',
    canActivate: [AuthGuard],
    component: ProfileEditComponent,
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
export class ProfileEditRoutingModule { }
