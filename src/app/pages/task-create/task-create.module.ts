import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskCreateRoutingModule } from './task-create-routing.module';
import { TaskCreateComponent } from './task-create.component';


@NgModule({
  declarations: [
    TaskCreateComponent
  ],
  imports: [
    CommonModule,
    TaskCreateRoutingModule
  ]
})
export class TaskCreateModule { }
