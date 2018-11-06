import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


export class GenericService<T> {

  protected url: string;
  protected domain: string = null;

  protected readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(protected http: HttpClient) {
    this.url = 'http://recipe.basvdeertwegh.nl/';
  }

  private getUrl(): string {
    return this.url + (this.domain != null ? this.domain : '');
  }

  getById(id): Observable<T> {
    return this.http.get<T>(this.getUrl() + id);
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.getUrl() + 'all');
  }

  save(t: T): Observable<T> {
    return this.http.post<T>(this.getUrl() + 'save', t, this.httpOptions);
  }
}
