import { Injectable } from '@angular/core';
import {GenericService} from './generic.service';
import {Incident} from '../classes/incident';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../classes/user';

@Injectable()
export class LoginOperatorService extends GenericService<User> {
  constructor(http: HttpClient) {
    super(http);
    this.domain = '';
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.getUrl() + 'register/',  User, this.httpOptions);
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(this.getUrl() + 'login/', User, this.httpOptions);
  }
}
