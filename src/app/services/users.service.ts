import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UsersService {

  usersList: string = "https://jsonplaceholder.typicode.com/users";
  todoList: string = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.usersList);
  }

  getSingleUser(id: number) {
    return this.http.get(this.usersList + "/" + id);
  }

  getTodo(id: number) {
    return this.http.get(this.todoList + "/?userId=" + id);
  }

}
