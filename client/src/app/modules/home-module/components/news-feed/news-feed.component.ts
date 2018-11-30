import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from '../../services/newsfeed/newsfeed.service';
import { SessionService } from '../../../../shared/services/session/session.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {

  news: Array<any>

  constructor(
      private newsFeedService: NewsFeedService, 
      private sessionService: SessionService) {}

  ngOnInit() 
  {
    this.newsFeedService.getNewsFeedForUser(this.sessionService.currentUser.id)
    .subscribe(data => {
      this.news = data;});
  }

}
