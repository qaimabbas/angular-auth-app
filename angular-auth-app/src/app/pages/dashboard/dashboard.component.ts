import {Component, OnInit} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent  implements  OnInit{

  user$: any


  constructor( public auth : AuthService) {
  }

public ngOnInit() {
    this.user$= this.auth.user$;
    console.log(this.auth.user$)
  }
}
