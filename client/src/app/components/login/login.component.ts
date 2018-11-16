import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service'
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  private _name = '';
  private _password = '';
  loading = false;

  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '';
  }

  @Input()
  set password(password: string) {
    this._password = (password && password.trim()) || '';
  }

  onLoginClicked()
  {
    console.log("OnCLicked Called");
    console.log("name: " + "asd" + "passwd: " + this._password);    

    this.router.navigate(['google.com']);

    /*this.authenticationService.validateUserLogin(this._name, this._password)
    .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['/home']);
                },
                error => {
                    this.router.navigate(['/']);
                });              */
  }

  constructor(
    private authenticationService: AuthenticationService, 
    private router: Router)
    { 
      
    }

  ngOnInit() {}

}

