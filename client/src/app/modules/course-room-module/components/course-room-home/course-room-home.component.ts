import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {CourseRoomService} from '../../../../shared/services/course-room/course-room.service';
import {ActivatedRoute} from '@angular/router';
import {CourseRoomComment} from '../../../../shared/models/courseRoomComment';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }

    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.message.toLowerCase().includes(searchText);
    });
  }
}


@Component({
  selector: 'app-course-room-home',
  templateUrl: './course-room-home.component.html',
  styleUrls: ['./course-room-home.component.scss']
})
export class CourseRoomHomeComponent implements OnInit {

  commentFilter: string;
  comments: CourseRoomComment[] = [];
  myComment = '';
  id: string;

  constructor(private courseRoomService: CourseRoomService, private route: ActivatedRoute) {}

  ngOnInit() {

    this.myComment = '';
    this.comments = [];
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.courseRoomService.getCommentsForCourseRoom(this.id).then(
      res => {
        res.forEach(
          p => {
            this.comments.push(p);
            console.log(p);
          }
        );
      });
  }

  onPostClicked() {
    this.courseRoomService.addCommentForCourseRoom(this.id, this.myComment).then(
      res => {
        this.ngOnInit();
      }
    );
  }
}
