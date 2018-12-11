import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Incident} from '../../../classes/incident';
import {IncidentsService} from '../../../services/incidents.service';
import {HttpErrorResponse} from '@angular/common/http';
import {IncidentTip} from '../../../classes/incidentTip';

@Component({
  selector: 'app-incident-detail',
  templateUrl: './incident-detail.component.html',
  styleUrls: ['./incident-detail.component.scss']
})
export class IncidentDetailComponent implements OnInit {

  private id: number;
  protected incident: Incident = null;
  public httpError: HttpErrorResponse = null;

  constructor(private router: Router, private incidentService: IncidentsService, private route: ActivatedRoute) {
  }

  confirmTip(tip: IncidentTip) {
    this.incidentService.confirmTip(tip.id).subscribe(
      data => {
        console.log(typeof data);
        this.incident = this.incidentJsonToIncident(data);
        console.log(this.incident, 'Incident');
      }
    );
  }

  closeTip(tip: IncidentTip) {
    this.incidentService.closeTip(tip.id).subscribe(
      data => {
        this.updateIncident();
      }
    );
  }

  confirm(incident: Incident) {
    this.incidentService.confirm(incident.id).subscribe(
      data => {
        this.incident = this.incidentJsonToIncident(data);
        console.log(this.incident, 'Incident');
      }
    );
  }

  close(incident: Incident) {
    this.incidentService.close(incident.id).subscribe(
      data => {
        this.router.navigate(['/incident']);
      }
    );
  }

  private updateIncident() {
    this.incidentService.getById(this.id).subscribe(
      data => {
        this.incident = this.incidentJsonToIncident(data);
        console.log(this.incident, 'Incident');
      }
    );
  }

  private incidentJsonToIncident(json) {
    let parsedJson = json;
    console.log(typeof json, 'json type');
    if (typeof json === 'string') {
      parsedJson = JSON.parse(json);
    }
    console.log(parsedJson, 'Parsed data');
    console.log(json, 'json');
    parsedJson.create_date = new Date(parsedJson.create_date);
    for (let incidentDescription of parsedJson.incidentDescription) {
      incidentDescription.date = new Date(incidentDescription.date);
    }
    for (let reinforcementInfo of parsedJson.reinforcementInfo) {
      reinforcementInfo.date = new Date(reinforcementInfo.date);
    }

    return Incident.fromJSON(parsedJson);
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.incidentService.getById(this.id).subscribe(
          data => {
            this.incident = this.incidentJsonToIncident(data);
            console.log(this.incident, 'Incident');
          }
        );
      }
    );
  }

}
