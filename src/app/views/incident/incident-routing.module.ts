import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IncidentListComponent} from './incident-list/incident-list.component';
import {IncidentDetailComponent} from './incident-detail/incident-detail.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Incident'
    },
    children: [
      {
        path: '',
        component: IncidentListComponent,
        data: {
          title: 'Incident list'
        }
      },
      {
        path: 'detail/:id',
        component: IncidentDetailComponent,
        data: {
          title: 'Incident detail'
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
