import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {take, tap} from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit{

  public userData: any;
  public constructor(private usersService:UsersService) {
  }
  public ngOnInit() {
    this.getAllUsers()
  }

  private getAllUsers(){
    return this.usersService.getUsers().pipe(
      take(1),
      tap((response)=>{
        this.userData=response;
      })
    ).subscribe()
  }

}
