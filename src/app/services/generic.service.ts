import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServiceEnum} from '../enums/serviceEnum';
import {Incident} from '../classes/incident';
import 'rxjs-compat/add/operator/map';
import {map} from 'rxjs/operators';


export class GenericService<T> {

  protected url: string;
  protected domain: string = null;

  protected readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(protected http: HttpClient) {
    this.url = 'http://145.93.68.49:8094/';
    // this.url = 'http://145.93.67.225:8094/';
  }

  protected getUrl(): string {
    return this.url + (this.domain != null ? this.domain : '');
  }

  getById(id): Observable<T> {
    return this.http.get<T>(this.getUrl() + id);
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.getUrl() + ServiceEnum.ALL);
  }

  save(t: T): Observable<T> {
    return this.http.post<T>(this.getUrl() + ServiceEnum.SAVE, t, this.httpOptions);
  }

  edit(t: T): Observable<T> {
    return this.http.put<T>(this.getUrl() + ServiceEnum.EDIT, t, this.httpOptions);
  }
}
