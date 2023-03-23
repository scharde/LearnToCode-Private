import { createContext, Dispatch, useReducer } from "react";
import {
  IAddTaskAction,
  IDeleteTaskAction,
  ITask,
  ITodoReducerAction,
  ITodoState,
  IUpdateTaskAction,
  TodoReducerActionEnum,
} from "./Types";

export const TaskContext = createContext<{
  activeTasks: ITask[];
  dispatch: Dispatch<ITodoReducerAction>;
}>({
  activeTasks: [],
  dispatch: () => {},
});

type Props = {
  children: React.ReactElement;
};

const deleteTaskAction = (tasks: ITask[], action: IDeleteTaskAction) => {
  return tasks.filter((task) => task.id !== action.data.id);
};

const updateTaskAction = (tasks: ITask[], action: IUpdateTaskAction) => {};

const reducer = (state: ITodoState, action: ITodoReducerAction) => {
  switch (action.type) {
    case TodoReducerActionEnum.Add:
      const newData = action.data;
      newData.id = new Date().toJSON();
      return { ...state, activeTasks: [action.data, ...state.activeTasks] };
    case TodoReducerActionEnum.Delete:
      return {
        ...state,
        activeTasks: deleteTaskAction(state.activeTasks, action),
      };
    case TodoReducerActionEnum.Update:
  }
  return state;
};

const TodoProvider = (props: Props) => {
  const tasks: ITask[] = [];

  const defaultState: ITodoState = {
    activeTasks: tasks,
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <TaskContext.Provider value={{ activeTasks: state.activeTasks, dispatch }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TodoProvider;
