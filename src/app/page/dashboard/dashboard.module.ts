import { PeopleComponent } from './../people/people.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { PeopleService } from 'src/app/service/people.service';
import { MaterialModule } from 'src/app/module/material.module';
@NgModule({
  declarations: [
    DashboardComponent,
    PeopleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    ComponentsModule,
    MaterialModule
  ],
  providers: [
    PeopleService
  ]
})
export class DashboardModule { }
