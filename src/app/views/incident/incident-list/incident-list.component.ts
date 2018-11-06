import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import {IncidentsService} from '../../../services/incidents.service';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.scss']
})
export class IncidentListComponent implements OnInit {
  public tableWidget: any;

  constructor(private incidentService: IncidentsService) { }

  ngOnInit() {
    this.incidentService.getAll().subscribe(
      data => {
        console.log(data[0]);

        this.initDatatable();
      }
    );
  }

  private initDatatable(): void {
    let table: any = $('#datatable');
    this.tableWidget = table.DataTable({
      select: true
    });
  }

}
