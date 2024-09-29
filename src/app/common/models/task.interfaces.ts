import { TaskStatusEnum } from './task-status.enum';

export interface IState {
  tasks: ITaskState;
}

export interface ITaskState {
  tasks: ITask[];
  loading: boolean;
  error: string | null;
}

export interface ITask {
  id: string;
  name: string;
  dueDate: string;
  status: TaskStatusEnum;
  persons: IPerson[];
}

export interface IPerson {
  name: string;
  age: number;
  skills: string[];
}
