export class CourseRoomComment {

  id: string;
  message: string;
  alreadyRatedByUser: boolean;
  rating: string;
  name: string;
  timestamp: string;

  constructor() {
    this.id = '';
    this.message = '';
    this.alreadyRatedByUser = false;
    this.rating = '';
    this.name = '';
    this.timestamp = '';
  }

}
