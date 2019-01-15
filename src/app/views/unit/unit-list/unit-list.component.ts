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
        message = new MessageUnitListUpdate(JSON.parse(msg.getMessageData));
        //todo do whatever you need to do with the data
        break;
      case 'public class communication.messages.operatormessages.MessageUnitListUpdate':
        console.log('Me gotst a unit list update');
        message = new MessageUnitListUpdate(JSON.parse(msg.getMessageData));

        var tmpUnits = message.getUnits;
        this.units = [];
        for (const row of tmpUnits.unitIds) {
          var unit = new Unit(row);
          this.units.push(unit);
          console.log(unit, "Foreach unit loop");
        }
        break;
      case 'public class communication.messages.operatormessages.MessageConnectAsOperator':
        console.log('pong');
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



}
