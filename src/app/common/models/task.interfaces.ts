export interface ITaskState {
  tasks: ITask[];
  loading: boolean;
  error: string | null;
}

export interface ITask {
  id: string;
  name: string;
  dueDate: string;
  completed: boolean;
  persons: IPerson[];
}

export interface IPerson {
  name: string;
  age: number;
  skills: string[];
}