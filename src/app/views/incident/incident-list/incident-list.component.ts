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
export class IncidentListComponent implements AfterViewInit {
  public tableWidget: any;
  public httpError: HttpErrorResponse = null;
  protected incidents: Incident[];

  constructor(private incidentService: IncidentsService) {
    this.incidentService.getAll().subscribe(
      data => {
        this.incidents = [];
        for (let row of data) {
          row.create_date = new Date(row.create_date);
          this.incidents.push(Incident.fromJSON(row));
        }
        console.log(this.incidents, 'Incidenten');

        this.reInitDatatable();
        //this.initDatatable();
      }, error => {
        this.httpError = error;
        console.error('Couldn\'t connect to the rest server', error);
      }
    );
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
