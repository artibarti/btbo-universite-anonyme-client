import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// bootstrap
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// app component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// services
import { CourseService} from './services/course/course.service'
import { AuthenticationService } from './services/authentication/authentication.service'
import { SessionService } from './services/session/session.service'

// components
import { CourseListComponent } from './components/course-list/course-list.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CourseRoomHeaderComponent } from './components/course-room-header/course-room-header.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';
import { AboutPopupComponent } from './components/about-popup/about-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    ToolbarComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    CourseRoomHeaderComponent,
    TermsOfServiceComponent,
    AboutPopupComponent
  ],
  imports: [
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
