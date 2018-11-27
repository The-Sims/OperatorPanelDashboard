import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhasedplanListComponent} from './phasedplan-list/phasedplan-list.component';
import {PhasedplanDetailComponent} from './phasedplan-detail/phasedplan-detail.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Phasedplan'
    },
    children: [
      {
        path: 'list',
        component: PhasedplanListComponent,
        data: {
          title: 'Phasedplan list'
        }
      },
      {
        path: 'detail/:id',
        component: PhasedplanDetailComponent,
        data: {
          title: 'Phasedplan detail'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhasedplanRoutingModule {}
