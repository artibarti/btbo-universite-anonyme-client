import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// components
import { HomeComponent } from './home.component'
import { CourseListComponent, FilterPipe } from './components/course-list/course-list.component'
import { ProfileComponent } from './components/profile/profile.component'
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { DiscoverCoursesComponent } from './components/discover-courses/discover-courses.component';

// services
import { NewsFeedService } from './services/newsfeed/newsfeed.service';


@NgModule({
  declarations: [
    HomeComponent,
    CourseListComponent,
    ProfileComponent,
    NewsFeedComponent,
    DiscoverCoursesComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot()    
  ],
  providers: [NewsFeedService]
})
export class HomeModule { }
