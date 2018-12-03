import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {Phasedplan} from '../../../classes/phasedplan';
import {PhasedplanService} from '../../../services/phasedplan.service';

@Component({
  selector: 'app-phasedplan-add',
  templateUrl: './phasedplan-add.component.html',
  styleUrls: ['./phasedplan-add.component.scss']
})
export class PhasedplanAddComponent {

  private id: number;
  protected phasedplan: Phasedplan = null;
  public httpError: HttpErrorResponse = null;


}
