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
import {UnitwebsocksService} from '../../../services/websockets/unitwebsocks.service';
import {MessageConfirmOrder} from '../../../classes/messages/unitmanagermessages/MessageConfirmOrder';
import {MessageUnitListUpdate} from '../../../classes/messages/unitmanagermessages/MessageUnitListUpdate';
import {Unit} from '../../../classes/Unit';


@Component({
    selector: 'app-incident-list',
    templateUrl: './unit-list.component.html',
    styleUrls: ['./unit-list.component.scss']
})
export class UnitListComponent implements AfterViewInit {
    public tableWidget: any;
    public httpError: HttpErrorResponse = null;
    protected incidents: Incident[] = [];
    protected units: Unit[] = [];

    constructor(private unit: UnitwebsocksService) {
        this.unit.messages.subscribe(msg => {
            this.switchComponent(msg);
        });
        //
        // console.log('callback');
        // analyser.callback();
        // this.incidentService.getAll().subscribe(
        //     data => {
        //         console.log(data, 'Data');
        //         //this.setIncidents(data);
        //
        //         //this.initDatatable();
        //     }, error => {
        //         this.httpError = error;
        //         console.error('Couldn\'t connect to the rest server', error);
        //     }
        // );

    }

    switchComponent(msg) {
        let message = null;
        switch (msg.getMessageType) {
            case 'public class communication.messages.operatormessages.MessageConfirmOrderOperator':
                console.log('Me gotst a confirm order');
                message = new MessageConfirmOrder(JSON.parse(msg.getMessageData));
                //todo do whatever you need to do with the data
                break;
            case 'public class communication.messages.operatormessages.MessageUnitListUpdate':
                console.log('Me gotst a unit list update');
                console.log(msg);
                message = new MessageUnitListUpdate(JSON.parse(msg.getMessageData));
                //todo do whatever you need to do with the data
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
