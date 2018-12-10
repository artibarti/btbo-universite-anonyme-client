import { Component, OnInit } from '@angular/core';
import { SharedObjects } from '../../services/shared-objects.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-active-session',
  templateUrl: './active-session.component.html',
  styleUrls: ['./active-session.component.scss']
})
export class ActiveSessionComponent implements OnInit {

  constructor(private sharedObjects: SharedObjects) {}

  ngOnInit() {}

}
