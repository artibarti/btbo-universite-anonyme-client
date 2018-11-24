import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home.component'
import { CourseListComponent, FilterPipe } from './components/course-list/course-list.component'
import { CourseRoomHeaderComponent } from './components/course-room-header/course-room-header.component'
import { ProfileComponent } from './components/profile/profile.component'
import { CourseService } from './services/course/course.service';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { DiscoverCoursesComponent } from './components/discover-courses/discover-courses.component';

@NgModule({
  declarations: [
    HomeComponent,
    CourseListComponent,
    CourseRoomHeaderComponent,
    ProfileComponent,
    NewsFeedComponent,
    DiscoverCoursesComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [CourseService]
})
export class HomeModule { }
