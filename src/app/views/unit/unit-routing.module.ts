import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UnitsComponent} from './units/units.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Incident'
    },
    children: [
      {
        path: 'list',
        component: UnitsComponent,
        data: {
          title: 'Incident list'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitRoutingModule {}
