import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IncidentListComponent} from './incident-list/incident-list.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Incident'
    },
    children: [
      {
        path: 'list',
        component: IncidentListComponent,
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
export class IncidentRoutingModule {}
