import { Component } from '@angular/core';
import { MatChipListboxChange } from '@angular/material/chips';
import { TaskStatusEnum } from '@common/models/task-status.enum';
import { ITask, IState } from '@common/models/task.interfaces';
import { Store } from '@ngrx/store';
import * as TaskActions from '@store/task.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  tasks$: Observable<ITask[]>;
  filterStatus: TaskStatusEnum = TaskStatusEnum.ALL;
  filterStatuses: { value: TaskStatusEnum; viewValue: string }[] = [
    { value: TaskStatusEnum.ALL, viewValue: 'Todas' },
    { value: TaskStatusEnum.PENDING, viewValue: 'Pendientes' },
    { value: TaskStatusEnum.COMPLETE, viewValue: 'Completadas' },
  ];
  filteredTasks: ITask[] = [];
  paginatedTasks: ITask[] = [];
  loading$: Observable<boolean>;

  pageSize = 3;
  pageIndex = 0;

  constructor(private store: Store<IState>) {
    this.store.dispatch(TaskActions.loadTasks());
    this.tasks$ = this.store.select((state) => state.tasks.tasks);
    this.loading$ = this.store.select((state) => state.tasks.loading);
  }

  ngOnInit(): void {
    this.tasks$.subscribe((tasks) => {
      this.applyFilter(tasks);
    });
  }

  applyFilter(tasks: ITask[]): void {
    if (this.filterStatus === TaskStatusEnum.ALL) {
      this.filteredTasks = tasks;
    } else {
      this.filteredTasks = tasks.filter(
        (task) => task.status === this.filterStatus
      );
    }
    this.updatePaginatedTasks();
  }

  filterTasks({ value }: MatChipListboxChange) {
    this.filterStatus = value;
    this.tasks$.subscribe((tasks) => this.applyFilter(tasks));
  }

  updatePaginatedTasks(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedTasks = this.filteredTasks.slice(startIndex, endIndex);
  }

  handlePageEvent(event: any): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedTasks();
  }

  completeTask(task: ITask): void {
    this.store.dispatch(TaskActions.completeTask({ taskId: task.id }));
  }

  deleteTask(task: ITask): void {
    this.store.dispatch(TaskActions.deleteTask({ taskId: task.id }));
  }
}
