import {
  MessageBar,
  MessageBarType,
  PrimaryButton,
  Stack,
  TextField,
} from "@fluentui/react";
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../Todo/TodoProvider";
import { ITask, TodoReducerActionEnum } from "../Todo/Types";
import useInput from "./useInput";

const TaskForm = () => {
  const [showMessage, toggleShowMessage] = useState(false);
  const title = useInput("");
  const description = useInput("");

  const { dispatch } = useContext(TaskContext);

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        toggleShowMessage(false);
      }, 1000);
    }
  }, [showMessage]);

  const resetForm = () => {
    title.set("");
    description.set("");
  };

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data: ITask = {
      id: "",
      title: title.value,
      description: description.value,
      isFav: false,
    };
    dispatch({ type: TodoReducerActionEnum.Add, data });
    resetForm();
    toggleShowMessage(true);
  };

  return (
    <form onSubmit={formSubmit}>
      <TextField label="Title" required {...title} />
      <TextField label="Description" multiline rows={4} {...description} />

      <Stack horizontal style={{ marginTop: 20 }} tokens={{ childrenGap: 10 }}>
        <Stack style={{ width: "80%" }}>
          {showMessage && (
            <MessageBar messageBarType={MessageBarType.success}>
              Task added
            </MessageBar>
          )}
        </Stack>
        <Stack style={{ width: "20%" }}>
          <PrimaryButton type="submit" text="Add Task" />
        </Stack>
      </Stack>
    </form>
  );
};

export default TaskForm;
