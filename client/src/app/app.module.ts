import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CourseService} from './shared/course/course.service'
import { CourseListComponent } from './course-list/course-list.component';
import { ToolbarComponent } from './toolbar/toolbar.component'

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent, CourseListComponent, ToolbarComponent]
})
export class AppModule { }
