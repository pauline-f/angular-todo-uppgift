import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Todo } from '../models/todo.model';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  user: User;
  todo: Todo[];
  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.user = new User (null, '', '', '', '', '');
    const id = this.route.snapshot.params['id'];

    this.showUser(id);
    this.showTodo(id);
  }

  showUser(id: number) {
    this.usersService.getSingleUser(id)
      .subscribe((data: User) => this.user = {
          id: data['id'],
          name:  data['name'],
          username: data['username'],
          email: data['email'],
          phone: data['phone'],
          website: data['website']
      });
  }

  showTodo(id: number) {
    this.usersService.getTodo(id)
    .subscribe((data: Todo[]) => this.todo = data);
  }
}
