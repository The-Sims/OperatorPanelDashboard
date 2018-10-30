import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IncidentRoutingModule} from './incident-routing.module';
import {IncidentListComponent} from './incident-list/incident-list.component';

@NgModule({
  imports: [
    CommonModule,
    IncidentRoutingModule
  ],
  declarations: [
    IncidentListComponent
  ]
})
export class IncidentModule { }
