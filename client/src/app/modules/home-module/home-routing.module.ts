import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component'
import { AuthGuard } from '../../shared/guards/auth.guard';
import { DiscoverCoursesComponent } from './components/discover-courses/discover-courses.component'
import { NewsFeedComponent } from './components/news-feed/news-feed.component';

const routes: Routes = 
[
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent,
    children:
    [
      {
        path: 'discover',
        canActivate: [AuthGuard],
        component: DiscoverCoursesComponent
      },
      {
        path: 'news',
        canActivate: [AuthGuard],
        component: NewsFeedComponent
      },    
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
