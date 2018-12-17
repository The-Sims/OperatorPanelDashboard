import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Incident} from '../../../classes/incident';
import {IncidentsService} from '../../../services/incidents.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Phasedplan} from '../../../classes/phasedplan';
import {PhasedplanService} from '../../../services/phasedplan.service';

@Component({
  selector: 'app-phasedplan-detail',
  templateUrl: './phasedplan-detail.component.html',
  styleUrls: ['./phasedplan-detail.component.scss']
})
export class PhasedplanDetailComponent implements OnInit {

  private id: number;
  protected phasedplan: Phasedplan = null;
  public httpError: HttpErrorResponse = null;

  constructor(private phasedplanService: PhasedplanService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.phasedplanService.getById(this.id).subscribe(
          data => {
            this.phasedplan = Phasedplan.fromJSON(data);
            console.log(this.phasedplan, 'Stappenplan');
          }
        );
      }
    );
  }

}
