import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UnitRoutingModule} from './unit-routing.module';
import {UnitsComponent} from './units/units.component';
import {ErrorCardComponent} from '../../utilcomponents/error-card/error-card.component';

@NgModule({
  imports: [
    CommonModule,
    UnitRoutingModule
  ],
  declarations: [
    UnitsComponent
  ]
})
export class UnitModule { }
