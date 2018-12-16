import { Component, OnInit, Input } from '@angular/core';
import { Comment as QuestionComment } from '../../../../shared/models/comment';
import { QuestionService } from '../../../../shared/services/question/question-service';

@Component({
  selector: 'app-comments-for-question',
  templateUrl: './comments-for-question.component.html',
  styleUrls: ['./comments-for-question.component.scss']
})
export class CommentsForQuestionComponent implements OnInit {

  @Input()
  questionID: string;

  comments: QuestionComment[] = [];
  myComment = '';

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.comments = [];
    this.myComment = '';

    this.questionService.getCommentsForQuestion(this.questionID).then(
      res => {
        res.forEach(p => this.comments.push(p));
      });
  }

  onPostClicked() {
    this.questionService.addCommentForQuestion(this.questionID, this.myComment).then(
      res => {
        this.ngOnInit();
      }
    );
  }

}
