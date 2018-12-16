import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionRoutingModule } from './course-room-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// components
import { CourseRoomComponent } from './course-room.component';
import { CreateCourseRoomComponent } from './components/create-course-room/create-course-room.component';
import { CourseRoomHomeComponent, FilterPipe } from './components/course-room-home/course-room-home.component';

@NgModule({
  declarations: [
    CourseRoomComponent,
    CreateCourseRoomComponent,
    CourseRoomHomeComponent,
    FilterPipe
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
export class CourseRoomModule {}
