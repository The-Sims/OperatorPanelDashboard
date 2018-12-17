import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GenericService} from './generic.service';
import {Incident} from '../classes/incident';
import {ServiceEnum} from '../enums/serviceEnum';

@Injectable()
export class IncidentsService extends GenericService<Incident> {
  constructor(http: HttpClient) {
    super(http);
    this.domain = 'incident/';
  }
  close(id: number): Observable<Incident> {
    return this.http.get<Incident>(this.getUrl() + 'conclude/' + id);
  }
  confirm(id: number): Observable<Incident> {
    return this.http.get<Incident>(this.getUrl() + 'confirm/' + id);
  }
  confirmTip(id: number): Observable<Incident> {
    return this.http.get<Incident>(this.getUrl() + 'confirmTip/' + id);
  }
}
