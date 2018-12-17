import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import {HttpErrorResponse} from '@angular/common/http';
import {ServiceEnum} from '../../../enums/serviceEnum';
import {PhasedplanService} from '../../../services/phasedplan.service';
import {Phasedplan} from '../../../classes/phasedplan';


@Component({
  selector: 'app-phasedplan-list',
  templateUrl: './phasedplan-list.component.html',
  styleUrls: ['./phasedplan-list.component.scss']
})
export class PhasedplanListComponent {
  public tableWidget: any;
  public httpError: HttpErrorResponse = null;
  protected phasedplans: Phasedplan[];

  constructor(private phasedPlanService: PhasedplanService) {
    this.phasedPlanService.getAll().subscribe(
      data => {
        this.phasedplans = [];
        for (let row of data) {
          this.phasedplans.push(Phasedplan.fromJSON(row));
        }
        console.log(this.phasedplans, 'Stappenplannen');

        this.reInitDatatable();
      }, error => {
        this.httpError = error;
        console.error('Couldn\'t connect to the rest server', error);
      }
    );
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
      select: true
    });
  }
}
