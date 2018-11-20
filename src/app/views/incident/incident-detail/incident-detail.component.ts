import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Incident} from '../../../classes/incident';
import {IncidentsService} from '../../../services/incidents.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-incident-detail',
  templateUrl: './incident-detail.component.html',
  styleUrls: ['./incident-detail.component.scss']
})
export class IncidentDetailComponent implements OnInit {

  private id: number;
  protected incident: Incident = null;
  public httpError: HttpErrorResponse = null;

  constructor(private incidentService: IncidentsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.incidentService.getById(this.id).subscribe(
          data => {
            this.incident = Incident.fromJSON(data);
            console.log(this.incident, 'Incident');
          }
        );
      }
    );
  }

}
