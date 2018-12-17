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


@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.scss']
})
export class IncidentListComponent implements AfterViewInit {
  public tableWidget: any;
  public httpError: HttpErrorResponse = null;
  protected incidents: Incident[];

  constructor(private incidentService: IncidentsService, private analyser: AnalyserwebsocksService) {
      this.analyser.messages.subscribe(msg => {
          console.log(msg.getMessageType);
          console.log(msg.getMessageData);
          this.switchComponent(msg);
      });
    this.incidentService.getAll().subscribe(
      data => {
        console.log(data, "Data");
        this.incidents = [];
        // for (let row of data) {
        //   row.create_date = new Date(row.create_date);
        //   for (let incidentDescription of row.incidentDescription){
        //     incidentDescription.date = new Date(incidentDescription.date);
        //   }
        //   for (let reinforcementInfo of row.reinforcementInfo){
        //     reinforcementInfo.date = new Date(reinforcementInfo.date);
        //   }
        //   this.incidents.push(Incident.fromJSON(row));
        // }
        console.log(this.incidents, 'Incidenten');

        this.reInitDatatable();
        //this.initDatatable();
      }, error => {
        this.httpError = error;
        console.error('Couldn\'t connect to the rest server', error);
      }
    );
  }
    switchComponent(msg) {
        let message = null;
        switch (msg.getMessageType) {
            case 'public class communication.messages.sharedmessages.MessageUpdateIncident':
                console.log('Me gotst an update incident');
                message = new MessageUpdateIncident(JSON.parse(msg.getMessageData));
                //doet niks
                break;
            case 'public class communication.messages.sharedmessages.MessageUpdateIncidents':
                console.log('Me gotst an update incidents');
                message = new MessageUpdateIncidents(JSON.parse(msg.getMessageData));
                //TODO fix html (kan geen datum en 'live' niet lezen)
                this.incidents = message.getIncidents;
                break;
            default:
                console.log('rip');
                break;
        }
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
          incident.modify_date,
          incident.live ? 'Ja' : 'Nee',
          '<'
        ]);
    }
    return dataSet;
  }

}
