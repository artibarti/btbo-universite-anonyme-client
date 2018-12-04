import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// filters
import { FilterPipe as SessionFilteripe } from './components/course-sessions/course-sessions.component'
import { FilterPipe as RoomFilterPipe } from './components/course-rooms/course-rooms.component'

// components
import { CourseComponent } from './course.component';
import { AboutCourseComponent } from './components/about-course/about-course.component'
import { CourseRoomsComponent } from './components/course-rooms/course-rooms.component'
import { CourseSessionsComponent } from './components/course-sessions/course-sessions.component'
import { CourseSettingsComponent } from './components/course-settings/course-settings.component'
import { CourseStatsComponent } from './components/course-stats/course-stats.component'

// services
import { SharedObjects } from './services/shared-objects.service';


@NgModule({
  declarations: [
    CourseComponent,
    SessionFilteripe,
    RoomFilterPipe,
    AboutCourseComponent,
    CourseRoomsComponent,
    CourseSessionsComponent,
    CourseSettingsComponent,
    CourseStatsComponent,
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: []
})
export class CourseModule {}
