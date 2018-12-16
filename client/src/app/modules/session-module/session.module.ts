import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionRoutingModule } from './session-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// components
import { SessionComponent } from './session.component';
import { CreateSessionComponent } from './components/create-session/create-session.component';
import { ActiveSessionComponent, FilterPipe } from './components/active-session/active-session.component';
import { OneQuestionComponent } from './components/one-question/one-question.component';
import { CommentsForQuestionComponent } from './components/comments-for-question/comments-for-question.component';

@NgModule({
  declarations: [
    SessionComponent,
    CreateSessionComponent,
    ActiveSessionComponent,
    FilterPipe,
    OneQuestionComponent,
    CommentsForQuestionComponent
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
