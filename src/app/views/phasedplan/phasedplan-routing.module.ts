import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhasedplanListComponent} from './phasedplan-list/phasedplan-list.component';
import {PhasedplanDetailComponent} from './phasedplan-detail/phasedplan-detail.component';
import {PhasedplanAddComponent} from './phasedplan-add/phasedplan-add.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Phasedplan'
    },
    children: [
      {
        path: '',
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
      {
        path: 'add',
        component: PhasedplanAddComponent,
        data: {
          title: 'Phasedplan toevoegen'
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
