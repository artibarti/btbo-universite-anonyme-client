import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../../../shared/models/question';

@Component({
  selector: 'app-one-question',
  templateUrl: './one-question.component.html',
  styleUrls: ['./one-question.component.scss']
})
export class OneQuestionComponent implements OnInit {

  @Input()
  input: string;
  
  question: Question;
  showComments: boolean = false;

  constructor() { }

  ngOnInit() 
  {
    this.question = JSON.parse(this.input);  
  }

  onShowCommentClicked()
  {
    this.showComments = true;
  }

  onHideCommentClicked()
  {
    this.showComments = false;
  }
}
