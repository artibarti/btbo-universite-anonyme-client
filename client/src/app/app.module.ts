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

// components
import { CourseListComponent } from './components/course-list/course-list.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    ToolbarComponent,
    FooterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],

  providers: [CourseService, AuthenticationService],
  bootstrap: [AppComponent, ToolbarComponent, FooterComponent, LoginComponent]
})
export class AppModule {}
