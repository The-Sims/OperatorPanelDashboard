import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.scss']
})
export class IncidentListComponent implements OnInit {
  public tableWidget: any;

  constructor() { }

  ngOnInit() {
    this.initDatatable();
  }

  private initDatatable(): void {
    let table: any = $('#datatable');
    this.tableWidget = table.DataTable({
      select: true
    });
  }

}
