import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from '../../services/newsfeed/newsfeed.service';
import { SessionService } from '../../../../shared/services/session/session.service';
import { New } from '../../../../shared/models/new';
import { OneNewComponent } from '../one-new/one-new.component';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {

  news: Array<New>

  constructor(
      private newsFeedService: NewsFeedService, 
      private sessionService: SessionService) {}

  stringifyNew(n: New)
  {
    return JSON.stringify(n);
  }

  ngOnInit() 
  {
    this.newsFeedService.getNewsFeedForUser(this.sessionService.currentUser.id)
    .subscribe(data => {
      this.news = data;});
  }

}
