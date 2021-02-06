import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor( public authService: AuthenticationService, public router: Router) { }

  ngOnInit() {}

  logIn(email, password){
    this.authService.SignIn(email.value, password.value)
    .then(user => {
      //navigate to user profile
      this.router.navigateByUrl('/');
    })
    .catch(error => {
      console.log(error.message);
    });     
}

}
