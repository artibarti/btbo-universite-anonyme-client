import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// app
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// my modules
import { WelcomeModule } from './modules/welcome-module/welcome.module'

// services
import { CourseService} from './shared/services/course/course.service'
import { SessionService } from './shared/services/session/session.service'

// components
import { CourseListComponent } from './shared/components/course-list/course-list.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProfileComponent } from './shared/components/profile/profile.component';
import { CourseRoomHeaderComponent } from './shared/components/course-room-header/course-room-header.component';
import { AboutPopupComponent } from './shared/components/about-popup/about-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    ToolbarComponent,
    FooterComponent,
    ProfileComponent,
    CourseRoomHeaderComponent,
    AboutPopupComponent
  ],
  imports: [
    WelcomeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],

  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
