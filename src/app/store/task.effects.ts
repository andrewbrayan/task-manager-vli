import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as TaskActions from './task.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TaskService } from '../common/services/task.service';
import { TaskStatusEnum } from '@common/models/task-status.enum';

@Injectable()
export class TaskEffects {
  constructor(private actions$: Actions, private taskService: TaskService) {}

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.loadTasks),
      mergeMap(() =>
        this.taskService.getTasks().pipe(
          map((tasks) => TaskActions.loadTasksSuccess({ tasks })),
          catchError((error) =>
            of(TaskActions.loadTasksFailure({ error: error.message }))
          )
        )
      )
    )
  );

  createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.createTask),
      mergeMap((action) =>
        this.taskService.createTask(action.task).pipe(
          map((task) => TaskActions.createTaskSuccess({ task })),
          catchError((error) =>
            of(TaskActions.createTaskFailure({ error: error.message }))
          )
        )
      )
    )
  );

  completeTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.completeTask),
      mergeMap((action) =>
        this.taskService
          .completeTask(action.taskId, { status: TaskStatusEnum.COMPLETE })
          .pipe(
            mergeMap(() => [
              TaskActions.deleteTaskSuccess({ taskId: action.taskId }),
              TaskActions.loadTasks(),
            ]),
            catchError((error) =>
              of(TaskActions.completeTaskFailure({ error: error.message }))
            )
          )
      )
    )
  );

  //Opcional: Effect para eliminar una tarea
  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.deleteTask),
      mergeMap((action) =>
        this.taskService.deleteTask(action.taskId).pipe(
          mergeMap(() => [
            TaskActions.deleteTaskSuccess({ taskId: action.taskId }),
            TaskActions.loadTasks(),
          ]),
          catchError((error) =>
            of(TaskActions.deleteTaskFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
