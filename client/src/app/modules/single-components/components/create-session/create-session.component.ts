import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) 
  { 
    console.log("constructor");
  }

  ngOnInit() 
  {
    console.log("ngOnInit() reached");
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log("kapott id: " + this.id);      
    });
  }

}
