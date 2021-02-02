import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

  constructor( public authService: AuthenticationService, public router: Router ) { }

  ngOnInit() {}

  signUp(email, password){
    this.authService.RegisterUser(email.value, password.value)
    .then(user => {
      // navigate to user profile
       this.router.navigateByUrl('/');
    })
    .catch(error => {
      console.log(error.message);
    });     
}

}
