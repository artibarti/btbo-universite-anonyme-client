import { Component, OnInit } from '@angular/core';
import { CoursePulse } from '../../../../shared/models/coursePulse';
import { CourseService } from '../../../../shared/services/course/course.service';
import { SharedObjects } from '../../services/shared-objects.service';

@Component({
  selector: 'app-course-stats',
  templateUrl: './course-stats.component.html',
  styleUrls: ['./course-stats.component.scss']
})
export class CourseStatsComponent implements OnInit {

  coursePulse: Array<CoursePulse> = [];
  public chartType: string;
  public chartDatasets: Array<any>;
  public chartLabels: Array<String>;
  public chartColors: Array<any>;
  public chartOptions: any;

  constructor(private courseService: CourseService, private sharedObjects: SharedObjects) {}

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    this.courseService.getCoursePulse(this.sharedObjects.course.id).then(
        res => {
            res.forEach(p => this.coursePulse.push(p));
            this.chartType = 'line';
            this.chartDatasets = [
                {data: this.coursePulse.map(p => p.commentPulse) , label: 'Comments'},
                {data: this.coursePulse.map(p => p.questionPulse) , label: 'Question'},
            ];

            this.chartLabels = this.coursePulse.map(p => p.day);

            this.chartColors = [
                {
                    backgroundColor: 'rgba(220,220,220,0.2)',
                    borderColor: 'rgba(220,220,220,1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(220,220,220,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(220,220,220,1)'
                },
                {
                    backgroundColor: 'rgba(151,187,205,0.2)',
                    borderColor: 'rgba(151,187,205,1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(151,187,205,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(151,187,205,1)'
                }
            ];

            this.chartOptions = {
                responsive: true
            };

        });
  }

}
