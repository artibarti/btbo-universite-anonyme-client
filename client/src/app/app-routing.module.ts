import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import {ErrorPageComponent} from './shared/components/error-page/error-page.component';

const routes: Routes = 
[
  {
    path: 'register',
    loadChildren: './modules/welcome-module/welcome.module#WelcomeModule',
  },
  {
    path: 'login',
    loadChildren: './modules/welcome-module/welcome.module#WelcomeModule',
  },
  {
    path: 'home',
    canLoad: [AuthGuard],
    loadChildren: './modules/home-module/home.module#HomeModule',
  },
  {
    path: 'course',
    canLoad: [AuthGuard],
    loadChildren: './modules/course-module/course.module#CourseModule',
  },
  {
    path: 'create/course',
    canLoad: [AuthGuard],
    loadChildren: './modules/create-course-module/create-course.module#CreateCourseModule',
  },
  {
    path: 'session',
    canLoad: [AuthGuard],
    loadChildren: './modules/session-module/session.module#SessionModule',
  },
  {
    path: 'courseroom',
    canLoad: [AuthGuard],
    loadChildren: './modules/course-room-module/course-room.module#CourseRoomModule',
  },
  {
    path: 'settings',
    canLoad: [AuthGuard],
    loadChildren: './modules/settings-module/settings.module#SettingsModule',
  },
  {
    path: 'error',
    component: ErrorPageComponent,
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule 
{

}
