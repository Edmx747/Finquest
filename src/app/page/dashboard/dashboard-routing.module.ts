import { PeopleComponent } from './../people/people.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'people',
        component: PeopleComponent,
        outlet: 'dashboard',
      }
    ]
  },
  // {
  //   path: 'people',
  //   loadChildren: () => import('./../people/people.module').then(m => m.PeopleModule),
  //   outlet: 'dashboard',
  // }
  // {
  //   path: '',
  //   component: DashboardComponent,
  //   children: [
  //     {
  //       path: 'people',
  //       component: PeopleComponent,
  //       outlet: 'dashboard'
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
