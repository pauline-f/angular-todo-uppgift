import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private usersService: UsersService) { 
  }

  ngOnInit() {
    this.usersService.geUsers().subscribe((data: User[]) => this.users = data);
  }

}
