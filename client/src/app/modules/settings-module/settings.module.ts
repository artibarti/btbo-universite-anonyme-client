import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// components
import { SettingsComponent } from './settings.component';
import { ProfileMenuComponent } from './components/profile-menu/profile-menu.component'
import { EditProfileComponent } from './components/edit-profile/edit-profile.component'
import { EditAccountComponent } from './components/edit-account/edit-account.component'
import { InviteComponent } from './components/invite/invite.component'
import { DonateComponent } from './components/donate/donate.component'

// services
import { SettingsService } from './services/settings/settings.service'

@NgModule({
  declarations: [
    SettingsComponent,
    ProfileMenuComponent,
    EditProfileComponent,
    EditAccountComponent,
    InviteComponent,
    DonateComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SettingsRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: []

})
export class SettingsModule { }
