import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IncidentRoutingModule} from './incident-routing.module';
import {IncidentListComponent} from './incident-list/incident-list.component';
import {ErrorCardComponent} from '../../utilcomponents/error-card/error-card.component';
import { IncidentDetailComponent } from './incident-detail/incident-detail.component';

@NgModule({
  imports: [
    CommonModule,
    IncidentRoutingModule
  ],
  declarations: [
    IncidentListComponent,
    ErrorCardComponent,
    IncidentDetailComponent
  ]
})
export class IncidentModule { }
