import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import {IncidentsService} from '../../../services/incidents.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ServiceEnum} from '../../../enums/serviceEnum';
import {Incident} from '../../../classes/incident';
import {AnalyserwebsocksService} from '../../../services/websockets/analyserwebsocks.service';
import {MessageUpdateIncident} from '../../../classes/messages/analysermessages/MessageUpdateIncident';
import {MessageUpdateIncidents} from '../../../classes/messages/analysermessages/MessageUpdateIncidents';
import {MessageConnectAsOperator} from '../../../classes/messages/analysermessages/MessageConnectAsOperator';


@Component({
    selector: 'app-incident-list',
    templateUrl: './incident-list.component.html',
    styleUrls: ['./incident-list.component.scss']
})
export class IncidentListComponent implements AfterViewInit {
    public tableWidget: any;
    public httpError: HttpErrorResponse = null;
    protected incidents: Incident[] = [];

    constructor(private incidentService: IncidentsService, private analyser: AnalyserwebsocksService) {
        this.analyser.messages.subscribe(msg => {
            this.switchComponent(msg);
        });
        //
        // console.log('callback');
        // analyser.callback();
        this.incidentService.getAll().subscribe(
            data => {
                console.log(data, 'Data');
                //this.setIncidents(data);

                //this.initDatatable();
            }, error => {
                this.httpError = error;
                console.error('Couldn\'t connect to the rest server', error);
            }
        );

    }

    switchComponent(msg) {
        //this.analyser.connectAsOperator();
        let message = null;
        switch (msg.getMessageType) {
            case 'public class communication.messages.sharedmessages.MessageUpdateIncident':
                console.log('Me gotst an update incident');
                message = new MessageUpdateIncident(JSON.parse(msg.getMessageData));
                //doet niks
                break;
            case 'public class communication.messages.sharedmessages.MessageUpdateIncidents':
                message = new MessageUpdateIncidents(JSON.parse(msg.getMessageData));
                //TODO fix html (kan geen datum en 'live' niet lezen)

                this.setIncidents(message.getIncidents);
                //this.incidents = message.getIncidents;
                break;
            case 'public class communication.messages.operatormessages.MessageConnectAsOperator':
                console.log('pong');
                break;
            default:
                console.log('rip');
                break;
        }
    }

    setIncidents(incidents) {
        console.log(incidents, 'Incidents received');
        this.incidents = [];
        for (let row of incidents) {
            row.createDate = new Date(row.createDate);
            row.modifyDate = new Date(row.modifyDate);
            for (let incidentDescription of row.incidentDescription) {
                incidentDescription.date = new Date(incidentDescription.date);
            }
            for (let reinforcementInfo of row.reinforcementInfo) {
                reinforcementInfo.date = new Date(reinforcementInfo.date);
            }
            this.incidents.push(Incident.fromJSON(row));
        }
        console.log(this.incidents, 'Incidenten');
        this.reInitDatatable();
    }

    ngAfterViewInit() {
        //this.reInitDatatable();
    }

    private reInitDatatable(): void {
        if (this.tableWidget) {
            this.tableWidget.destroy();
            this.tableWidget = null;
        }
        setTimeout(() => this.initDatatable(), 0);
    }

    protected initDatatable(): void {
        const table: any = $('#datatable');
        this.tableWidget = table.DataTable({
            //data: this.incidentsToTableArray(this.incidents),
            select: true
        });
    }

    incidentsToTableArray(incidents: Incident[]) {
        let dataSet = [];
        for (let incident of incidents) {
            dataSet.push(
                [
                    incident.id,
                    incident.category,
                    incident.modifyDate,
                    incident.live ? 'Ja' : 'Nee',
                    '<'
                ]);
        }
        return dataSet;
    }

}
