import { createAction, props } from '@ngrx/store';
import { IPerson, ITask } from '../common/models/task.interfaces';

// Actions para cargar las tareas
export const loadTasks = createAction('[Task List] Load Tasks');
export const loadTasksSuccess = createAction('[Task List] Load Tasks Success', props<{ tasks: ITask[] }>());
export const loadTasksFailure = createAction('[Task List] Load Tasks Failure', props<{ error: string }>());

// Actions para crear una nueva tarea
export const createTask = createAction('[Task] Create Task', props<{ task: ITask }>());
export const createTaskSuccess = createAction('[Task] Create Task Success', props<{ task: ITask }>());
export const createTaskFailure = createAction('[Task] Create Task Failure', props<{ error: string }>());

// Actions para completar una tarea
export const completeTask = createAction('[Task] Complete Task', props<{ taskId: string }>());
export const completeTaskSuccess = createAction('[Task] Complete Task Success', props<{ task: ITask }>());
export const completeTaskFailure = createAction('[Task] Complete Task Failure', props<{ error: string }>());

// Opcional: Acción para eliminar una tarea
export const deleteTask = createAction('[Task] Delete Task', props<{ taskId: string }>());
export const deleteTaskSuccess = createAction('[Task] Delete Task Success', props<{ taskId: string }>());
export const deleteTaskFailure = createAction('[Task] Delete Task Failure', props<{ error: string }>());

// Acción para asignar un personaje a una tarea
export const assignPersonToTask = createAction('[Task] Assign Person', props<{ taskId: string, person: IPerson }>());
export const assignPersonToTaskSuccess = createAction('[Task] Assign Person Success', props<{ taskId: string, person: IPerson }>());
export const assignPersonToTaskFailure = createAction('[Task] Assign Person Failure', props<{ error: string }>());
