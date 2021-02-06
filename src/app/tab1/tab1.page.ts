import { Component } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public authService: AuthenticationService, private router: Router) {}

  changeToSettings(){
    this.router.navigateByUrl('/settings');
  }
}
