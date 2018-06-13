import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UsersService {

  usersList: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  geUsers() {
    return this.http.get(this.usersList);
  }
}
