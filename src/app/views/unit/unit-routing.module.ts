import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UnitListComponent} from './unit-list/unit-list.component';
import {UnitDetailComponent} from './unit-detail/unit-detail.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Incident'
    },
    children: [
      {
        path: '',
        component: UnitListComponent,
        data: {
          title: 'Incident list'
        }
      },
      {
        path: 'detail/:id',
        component: UnitDetailComponent,
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
export class UnitRoutingModule {}
