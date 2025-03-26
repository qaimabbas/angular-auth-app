import {Component, OnInit} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

   constructor( public auth : AuthService) {
   }

   public ngOnInit() {
   }

}
