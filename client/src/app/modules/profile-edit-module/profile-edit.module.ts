import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileEditRoutingModule } from './profile-edit-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProfileEditComponent } from './profile-edit.component';
import { ProfileMenuComponent } from './components/profile-menu/profile-menu.component'
import { EditProfileComponent } from './components/edit-profile/edit-profile.component'
import { EditAccountComponent } from './components/edit-account/edit-account.component'
import { InviteComponent } from './components/invite/invite.component'
import { DonateComponent } from './components/donate/donate.component'

@NgModule({
  declarations: [
    ProfileEditComponent,
    ProfileMenuComponent,
    EditProfileComponent,
    EditAccountComponent,
    InviteComponent,
    DonateComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ProfileEditRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class ProfileEditModule { }
