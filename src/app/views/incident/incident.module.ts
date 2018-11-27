import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IncidentRoutingModule} from './incident-routing.module';
import {IncidentListComponent} from './incident-list/incident-list.component';
import { IncidentDetailComponent } from './incident-detail/incident-detail.component';
import {UtilModule} from '../../UitlModule';

@NgModule({
  imports: [
    CommonModule,
    IncidentRoutingModule,
    UtilModule
  ],
  declarations: [
    IncidentListComponent,
    IncidentDetailComponent
  ]
})
export class IncidentModule { }
