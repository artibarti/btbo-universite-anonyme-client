import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { MatMenuModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CourseService} from './shared/course/course.service'
import { CourseListComponent } from './course-list/course-list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ImagePoolService } from './shared/image-pool/image-pool.service'

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    ToolbarComponent,
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
    MatMenuModule,
    MatIconModule
  ],
  providers: [CourseService, ImagePoolService],
  bootstrap: [AppComponent, CourseListComponent, ToolbarComponent]
})
export class AppModule { }
