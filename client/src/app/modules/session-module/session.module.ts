import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionRoutingModule } from './session-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// components
import { SessionComponent } from './session.component';
import { CreateSessionComponent } from './components/create-session/create-session.component'

@NgModule({
  declarations: [
    SessionComponent,
    CreateSessionComponent
  ],
  imports: [
    CommonModule,
    SessionRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: []
})
export class SessionModule {}
