import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GenericService} from './generic.service';
import {Incident} from '../classes/incident';

@Injectable()
export class IncidentsService extends GenericService<Incident> {
  constructor(http: HttpClient) {
    super(http);
    this.domain = 'incident/';
  }
}
