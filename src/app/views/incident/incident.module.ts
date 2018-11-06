import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IncidentRoutingModule} from './incident-routing.module';
import {IncidentListComponent} from './incident-list/incident-list.component';
import {ErrorCardComponent} from '../../utilcomponents/error-card/error-card.component';

@NgModule({
  imports: [
    CommonModule,
    IncidentRoutingModule
  ],
  declarations: [
    IncidentListComponent,
    ErrorCardComponent
  ]
})
export class IncidentModule { }
