import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PhasedplanRoutingModule} from './phasedplan-routing.module';
import {PhasedplanListComponent} from './phasedplan-list/phasedplan-list.component';
import {PhasedplanDetailComponent} from './phasedplan-detail/phasedplan-detail.component';
import {UtilModule} from '../../UitlModule';
import {PhasedplanAddComponent} from './phasedplan-add/phasedplan-add.component';

@NgModule({
  imports: [
    CommonModule,
    PhasedplanRoutingModule,
    UtilModule
  ],
  declarations: [
    PhasedplanListComponent,
    PhasedplanDetailComponent,
    PhasedplanAddComponent
  ]
})
export class PhasedplanModule { }
