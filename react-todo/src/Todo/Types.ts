import { type } from "os";

export enum PivotTypeEnum {
  Task = "Task",
  TaskForm = "TaskForm",
  Completed = "Completed",
}

export interface ITask {
  id: string;
  title: string;
  description?: string;
  isFav: boolean;
}

export interface ITodoState {
  activeTasks: ITask[];
}

export enum TodoReducerActionEnum {
  Add = "add",
  Delete = "delete",
  Update = "update",
  ToggleFav = "toggleFav",
}

export type ITodoReducerAction =
  | IAddTaskAction
  | IDeleteTaskAction
  | IUpdateTaskAction;

export interface IAddTaskAction {
  type: TodoReducerActionEnum.Add;
  data: ITask;
}

export interface IDeleteTaskAction {
  type: TodoReducerActionEnum.Delete;
  data: { id: string };
}

export interface IUpdateTaskAction {
  type: TodoReducerActionEnum.Update;
  data: { id: string };
}
