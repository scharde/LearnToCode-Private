import {
  Checkbox,
  FontIcon,
  mergeStyles,
  MessageBar,
  Stack,
} from "@fluentui/react";
import { useContext } from "react";
import { TaskContext } from "../TodoProvider";
import { TodoReducerActionEnum } from "../Types";
import classNames from "./TaskList.style";
import Strings from "../string.json";

interface ITask {
  id: string;
  title: string;
  isFav: boolean;
}
const TaskList = () => {
  const { activeTasks, dispatch } = useContext(TaskContext);

  const deleteTask = (taskId: string) => {
    if (window.confirm(Strings.ConfirmDeleteTask)) {
      dispatch({ type: TodoReducerActionEnum.Delete, data: { id: taskId } });
    }
  };

  const toggleFavTask = (taskId: string) => {};

  const onRenderCell = (task: ITask) => {
    return (
      <Stack horizontal key={task.id} className={classNames.taskItemContainer}>
        <Stack horizontal style={{ width: "85%" }}>
          <Checkbox />
          <span>{task.title}</span>
        </Stack>
        <Stack horizontal style={{ width: "15%" }}>
          <FontIcon iconName="Info" className={classNames.icon} />
          <FontIcon
            iconName={task.isFav ? "FavoriteStarFill" : "FavoriteStar"}
            className={classNames.icon}
            onClick={() => {
              toggleFavTask(task.id);
            }}
          />
          <FontIcon iconName="EditNote" className={classNames.icon} />
          <FontIcon
            iconName="Delete"
            className={classNames.icon}
            onClick={() => {
              deleteTask(task.id);
            }}
          />
        </Stack>
      </Stack>
    );
  };

  return (
    <Stack className={classNames.rootContainer}>
      {activeTasks.length ? (
        activeTasks.map(onRenderCell)
      ) : (
        <MessageBar>No task to show</MessageBar>
      )}
    </Stack>
  );
};

export default TaskList;
