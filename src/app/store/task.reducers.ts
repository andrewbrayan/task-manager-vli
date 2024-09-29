import { createReducer, on } from '@ngrx/store';
import * as TaskActions from './task.actions';
import { ITaskState } from '../common/models/task.interfaces';

export const initialState: ITaskState = {
  tasks: [],
  loading: false,
  error: null,
};

export const taskReducer = createReducer(
  initialState,
  on(TaskActions.loadTasks, (state) => ({ ...state, loading: true })),
  on(TaskActions.loadTasksSuccess, (state, { tasks }) => ({
    ...state,
    loading: false,
    tasks: [...tasks],
  })),
  on(TaskActions.loadTasksFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(TaskActions.createTask, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task],
  })),
  on(TaskActions.completeTask, (state, { taskId }) => ({
    ...state,
    tasks: state.tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    ),
  })),
  on(TaskActions.assignPersonToTask, (state, { taskId, person }) => ({
    ...state,
    tasks: state.tasks.map((task) =>
      task.id === taskId
        ? { ...task, persons: [...task.persons, person] }
        : task
    ),
  }))
);
