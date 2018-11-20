import { Injectable } from '@angular/core';
import {GenericService} from './generic.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../classes/user';

@Injectable()
export class UserService extends GenericService<User> {
  constructor(http: HttpClient) {
    super(http);
    this.domain = 'user/';
  }
}
