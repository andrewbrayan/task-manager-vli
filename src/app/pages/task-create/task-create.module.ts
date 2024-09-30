import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TaskCreateRoutingModule } from './task-create-routing.module';
import { TaskCreateComponent } from './task-create.component';

// Módulos de Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [TaskCreateComponent],
  imports: [
    CommonModule,
    TaskCreateRoutingModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    ReactiveFormsModule,
  ],
})
export class TaskCreateModule {}
