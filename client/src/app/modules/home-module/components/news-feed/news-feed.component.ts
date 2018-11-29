import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from '../../services/newsfeed/newsfeed.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {

  news: Array<any>

  constructor(private newsFeedService: NewsFeedService) { }

  ngOnInit() 
  {
    this.newsFeedService.getNewsFeedForUser("1")
    .subscribe(data => {
      this.news = data;});
  }

}
