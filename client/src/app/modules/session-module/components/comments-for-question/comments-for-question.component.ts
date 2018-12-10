import { Component, OnInit, Input } from '@angular/core';
import { Comment as QuestionComment } from '../../../../shared/models/comment';

@Component({
  selector: 'app-comments-for-question',
  templateUrl: './comments-for-question.component.html',
  styleUrls: ['./comments-for-question.component.scss']
})
export class CommentsForQuestionComponent implements OnInit {

  @Input()
  questionID: string;

  comments: QuestionComment[] = [];
  myComment: QuestionComment;

  constructor() { }

  ngOnInit() 
  {
    this.comments = [];
    this.myComment = new QuestionComment;


  }

}
