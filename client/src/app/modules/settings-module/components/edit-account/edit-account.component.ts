import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {

  passwords = {old: '', new1: '', new2: ''};

  constructor() { }

  onUpdateClicked() {

  }

  ngOnInit() {
    this.passwords.old = '';
    this.passwords.new1 = '';
    this.passwords.new2 = '';
  }

}
