import { Component, OnInit, Input } from '@angular/core';
import { NewsFeedService } from '../../services/newsfeed/newsfeed.service';
import { SessionService } from '../../../../shared/services/session/session.service';
import { New } from '../../../../shared/models/new';

@Component({
  selector: 'app-one-new',
  templateUrl: './one-new.component.html',
  styleUrls: ['./one-new.component.scss']
})
export class OneNewComponent implements OnInit {

  @Input()
  input: string;

  new: New;

  constructor(
      private sessionService: SessionService) {}

  ngOnInit() {
    console.log(this.new);
    this.new = JSON.parse(this.input);
  }

}
