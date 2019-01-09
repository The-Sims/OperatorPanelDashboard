import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Incident} from '../../../classes/incident';
import {IncidentsService} from '../../../services/incidents.service';
import {HttpErrorResponse} from '@angular/common/http';
import {IncidentTip} from '../../../classes/incidentTip';
import {AnalyserwebsocksService} from '../../../services/websockets/analyserwebsocks.service';
import {MessageConfirmOrder} from '../../../classes/messages/unitmanagermessages/MessageConfirmOrder';
import {MessageUnitListUpdate} from '../../../classes/messages/unitmanagermessages/MessageUnitListUpdate';
import {MessageUpdateIncident} from '../../../classes/messages/analysermessages/MessageUpdateIncident';
import {MessageUpdateIncidents} from '../../../classes/messages/analysermessages/MessageUpdateIncidents';
import {FormControl} from '@angular/forms';
import {IncidentDescription} from '../../../classes/incidentDescription';
import {now} from 'moment';

@Component({
  selector: 'app-incident-detail',
  templateUrl: './incident-detail.component.html',
  styleUrls: ['./incident-detail.component.scss']
})
export class IncidentDetailComponent implements OnInit {

  private id: number;
  protected incident: Incident = null;
  public httpError: HttpErrorResponse = null;

  description = new FormControl();
  reinforcedInfo = new FormControl();

  constructor(private incidentService: IncidentsService, private route: ActivatedRoute, private analyser: AnalyserwebsocksService) {

  }

  addDescription() {
    var description = this.description.value;
    this.description = new FormControl();

    var incidentDescription = new IncidentDescription();
    incidentDescription.message = description;
    incidentDescription.date = new Date();

    this.incident.incidentDescription.push(incidentDescription);

    this.updateIncident();
  }

  addReinforcedInfo() {
    var reinforcedInfo = this.reinforcedInfo.value;
    this.reinforcedInfo = new FormControl();

    var incidentDescription = new IncidentDescription();
    incidentDescription.message = reinforcedInfo;
    incidentDescription.date = new Date();

    this.incident.reinforcementInfo.push(incidentDescription);

    this.updateIncident();
  }

  updateIncident() {
    console.log(this.incident, 'Updated incident');
    var tmp = new MessageUpdateIncident(this.incident);
    this.analyser.sendMsg(tmp);

  }

  confirmTip(tip: IncidentTip) {
    this.incidentService.confirmTip(tip.id).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  confirm(incident: Incident) {
    this.incidentService.confirm(incident.id).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  close(incident: Incident) {
    this.incidentService.close(incident.id).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  // //TODO  update incident + create model
  // updateIncident(){                            <---- update incident method
  // let obj = new messageUpdateIncident();       <---- create message model
  // this.analyser.sendMsg(obj);                  <---- send object
  // }
  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.setIncidentWithId(this.id);
      }
    );
  }

  setIncidentWithIdAndWS() {

  }

  setIncidentWithId(id) {
    this.incidentService.getById(id).subscribe(
      data => {
        console.log(data, 'Raw data');
        data.createDate = new Date(data.createDate);
        for (let incidentDescription of data.incidentDescription) {
          incidentDescription.date = new Date(incidentDescription.date);
        }
        for (let reinforcementInfo of data.reinforcementInfo) {
          reinforcementInfo.date = new Date(reinforcementInfo.date);
        }
        this.incident = Incident.fromJSON(data);
        console.log(this.incident, 'Incident');
      }
    );
  }


}
