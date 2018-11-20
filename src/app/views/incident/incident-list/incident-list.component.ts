import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import {IncidentsService} from '../../../services/incidents.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ServiceEnum} from '../../../enums/serviceEnum';
import {Incident} from '../../../classes/incident';


@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.scss']
})
export class IncidentListComponent {
  public tableWidget: any;
  public httpError: HttpErrorResponse = null;
  protected incidents: Incident[];

  constructor(private incidentService: IncidentsService) {
    this.incidentService.getAll().subscribe(
      data => {
        console.log(data);
        this.incidents = data;
        console.log(this.incidents, 'Incidents');
        this.initDatatable();
      }, error => {
        this.httpError = error;
        console.error('Couldn\'t connect to the rest server', error);
      }
    );
  }

  protected initDatatable(): void {
    const table: any = $('#datatable');
    this.tableWidget = table.DataTable({
      data: this.incidentsToTableArray(this.incidents),
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
          incident.date_updated,
          incident.live ? 'Ja' : 'Nee'
        ]);
    }
    return dataSet;
  }

}
