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

  news: New[] = [];

  constructor(
      private newsFeedService: NewsFeedService,
      private sessionService: SessionService) {}

  stringifyNew(n: New) {
    return JSON.stringify(n);
  }

  ngOnInit() {
    this.news = [];

    this.newsFeedService.getNewsFeedForUser().then(
      data => {
        if (data == null) {
          console.log('newfeed data is null');
        } else {
          console.log('newfeed data is not null');
          data.forEach(p => this.news.push(p));
        }
    });
  }

}
