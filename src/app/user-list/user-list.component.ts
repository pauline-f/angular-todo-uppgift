import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private usersService: UsersService, private router: Router) { 
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe((data: User[]) => this.users = data);
  }

  onViewUser(id: number) {
    this.router.navigate(['/users', id])
  }

}
