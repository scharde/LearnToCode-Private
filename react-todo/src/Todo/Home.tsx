import { Label, mergeStyles, Pivot, PivotItem, Stack } from "@fluentui/react";
import { createContext, useState } from "react";
import homeStyle from "./Home.style";
import TaskList from "./List/TasksList";
import { ITask, PivotTypeEnum } from "./Types";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import Style from "./string.json";
import Header from "./Header";
import TodoProvider from "./TodoProvider";
import TaskForm from "../TaskForm/TaskForm";
initializeIcons();

const Home = () => {
  const [selectedKey, setPivotKey] = useState<String>(PivotTypeEnum.Task);

  return (
    <TodoProvider>
      <Stack className={homeStyle.homeContainer}>
        <Header />
        <Stack className={homeStyle.pivotContainer}>
          <Pivot
            selectedKey={String(selectedKey)}
            onLinkClick={(event) => {
              setPivotKey(event?.props.itemKey || PivotTypeEnum.Task);
            }}
            styles={{ root: homeStyle.pivotRoot }}
          >
            <PivotItem
              headerText={Style.pivot.tasks}
              itemKey={PivotTypeEnum.Task}
            >
              <TaskList />
            </PivotItem>
            <PivotItem
              headerText={Style.pivot.taskForm}
              itemKey={PivotTypeEnum.TaskForm}
            >
              <TaskForm />
            </PivotItem>
            <PivotItem
              headerText={Style.pivot.completedTask}
              itemKey={PivotTypeEnum.Completed}
            >
              <Label>Pivot #3</Label>
            </PivotItem>
          </Pivot>
        </Stack>
      </Stack>
    </TodoProvider>
  );
};

export default Home;
