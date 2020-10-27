import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './../../shared/dao/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api: string = 'users';
  user: User;

  constructor(private http: HttpClient) { }

  add(user: User) {
    return this.http.post<User>(`${environment.api}/users`, user);
  }

  update(user: User) {
    return this.http.put<User>(`${environment.api}/users/${user.id}`, user);
  }

  getUsers() {
    return this.http.get<User[]>(`${environment.api}/users`);
  }

  getUser(id) {
    return this.http.get<User>(`${environment.api}/users/${id}`);
  }

  delete(id) {
    return this.http.delete<User>(`${environment.api}/users/${id}`);
  }

}
