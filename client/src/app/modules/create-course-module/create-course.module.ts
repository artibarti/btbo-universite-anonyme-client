import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCourseRoutingModule } from './create-course-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CreateCourseComponent } from './create-course.component';

// components


@NgModule({
  declarations: [
    CreateCourseComponent
  ],
  imports: [
    CommonModule,
    CreateCourseRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: []
})
export class CreateCourseModule {}
