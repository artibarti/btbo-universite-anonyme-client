import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CourseRoomHeaderComponent } from './components/course-room-header/course-room-header.component'
import { CourseService } from './services/course/course.service';
import { CourseComponent } from './course.component';
import { SessionListComponent } from './components/session-list/session-list.component'
import { FilterPipe } from './components/session-list/session-list.component'
import { CourseSessionService } from './services/session/session.service';


@NgModule({
  declarations: [
    CourseComponent,
    CourseRoomHeaderComponent,
    SessionListComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [CourseService, CourseSessionService]
})
export class CourseModule {}
