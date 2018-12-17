import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GenericService} from './generic.service';
import {Phasedplan} from '../classes/phasedplan';

@Injectable()
export class PhasedplanService extends GenericService<Phasedplan> {
  constructor(http: HttpClient) {
    super(http);
    this.domain = 'phasedplan/';
  }
}
