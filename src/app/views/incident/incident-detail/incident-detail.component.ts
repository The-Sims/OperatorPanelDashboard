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

@Component({
    selector: 'app-incident-detail',
    templateUrl: './incident-detail.component.html',
    styleUrls: ['./incident-detail.component.scss']
})
export class IncidentDetailComponent implements OnInit {

    private id: number;
    protected incident: Incident = null;
    public httpError: HttpErrorResponse = null;

    constructor(private incidentService: IncidentsService, private route: ActivatedRoute, private analyser: AnalyserwebsocksService) {

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
                this.incidentService.getById(this.id).subscribe(
                    data => {
                        // data.create_date = new Date(data.create_date);
                        //  for (let incidentDescription of data.incidentDescription) {
                        //      incidentDescription.date = new Date(incidentDescription.date);
                        //  }
                        //  for (let reinforcementInfo of data.reinforcementInfo) {
                        //      reinforcementInfo.date = new Date(reinforcementInfo.date);
                        //  }
                        //  this.incident = Incident.fromJSON(data);
                        //  console.log(this.incident, 'Incident');
                    }
                );
            }
        );
    }


}
