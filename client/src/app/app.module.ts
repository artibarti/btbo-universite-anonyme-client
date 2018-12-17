import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// app
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// my modules
import { WelcomeModule } from './modules/welcome-module/welcome.module';
import { HomeModule } from './modules/home-module/home.module';
import { CourseModule } from './modules/course-module/course.module';
import { SettingsModule } from './modules/settings-module/settings.module';
import { CreateCourseModule } from './modules/create-course-module/create-course.module';
import { SessionModule } from './modules/session-module/session.module';
import { CourseRoomModule } from './modules/course-room-module/course-room.module';

// services
import { SessionService } from './shared/services/session/session.service';
import { CourseService } from './shared/services/course/course.service';
import { CourseSessionService } from './shared/services/course-session/course-session.service';
import { UserService } from './shared/services/user/user.service';
import { QuestionService } from './shared/services/question/question-service';
import { CourseRoomService } from './shared/services/course-room/course-room.service';

// components
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AboutPopupComponent } from './shared/components/about-popup/about-popup.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    AboutPopupComponent,
    ErrorPageComponent,
  ],
  imports: [
    WelcomeModule,
    HomeModule,
    CourseModule,
    SettingsModule,
    CreateCourseModule,
    SessionModule,
    CourseRoomModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    MDBBootstrapModule.forRoot()
  ],

  providers: [AuthGuard, CourseService, CourseSessionService, UserService, QuestionService, CourseRoomService],
  bootstrap: [AppComponent]
})
export class AppModule {}
