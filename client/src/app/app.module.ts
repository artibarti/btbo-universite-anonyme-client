import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// app
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// my modules
import { WelcomeModule } from './modules/welcome-module/welcome.module'
import { HomeModule } from './modules/home-module/home.module'
import { CourseModule } from './modules/course-module/course.module'
import { SettingsModule } from './modules/settings-module/settings.module'
import { CreateCourseModule } from './modules/create-course-module/create-course.module'
import { SessionModule } from './modules/session-module/session.module'

// services
import { SessionService } from './shared/services/session/session.service'
import { CourseService } from './shared/services/course/course.service'
import { CourseSessionService } from './shared/services/course-session/course-session.service'
import { UserService } from './shared/services/user/user.service'

// components
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AboutPopupComponent } from './shared/components/about-popup/about-popup.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { QuestionService } from './shared/services/question/question-service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    AboutPopupComponent,
  ],
  imports: [
    WelcomeModule,
    HomeModule,
    CourseModule,
    SettingsModule,
    CreateCourseModule,
    SessionModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    MDBBootstrapModule.forRoot()
  ],

  providers: [AuthGuard, CourseService, CourseSessionService, UserService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
