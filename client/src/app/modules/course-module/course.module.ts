import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CourseRoomHeaderComponent } from './components/course-room-header/course-room-header.component'
import { CourseService } from './services/course/course.service';
import { CourseComponent } from './course.component';

@NgModule({
  declarations: [
    CourseComponent,
    CourseRoomHeaderComponent,
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [CourseService]
})
export class CourseModule {}
