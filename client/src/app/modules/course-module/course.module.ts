import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// filters
import { FilterPipe as SessionFilteripe } from './components/session-list/session-list.component'
import { FilterPipe as RoomFilterPipe } from './components/room-list/room-list.component'

// components
import { CourseHeaderComponent } from './components/course-header/course-header.component'
import { CourseComponent } from './course.component';
import { SessionListComponent } from './components/session-list/session-list.component'
import { CourseInfoComponent } from './components/course-info/course-info.component'
import { RoomListComponent } from './components/room-list/room-list.component'

// services
import { SharedObjects } from './services/shared-objects.service';


@NgModule({
  declarations: [
    CourseComponent,
    CourseHeaderComponent,
    SessionListComponent,
    SessionFilteripe,
    RoomFilterPipe,
    CourseInfoComponent,
    RoomListComponent
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
