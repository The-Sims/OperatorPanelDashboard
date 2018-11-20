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
export class IncidentListComponent implements OnInit, AfterViewInit {
  public tableWidget: any;
  public httpError: HttpErrorResponse = null;
  protected incidents: Incident[];

  constructor(private incidentService: IncidentsService) {
  }

  ngOnInit() {
    this.incidentService.getAll().subscribe(
      data => {
        console.log(data);
        this.incidents = data;
        console.log(this.incidents, "Incidents");
      }, error => {
        this.httpError = error;
        console.error('Couldn\'t connect to the rest server', error);
      }
    );
  }

  ngAfterViewInit() {
    this.initDatatable();
  }
  protected initDatatable(): void {
    const table: any = $('#datatable');
    this.tableWidget = table.DataTable({
      select: true
    });
  }

}
