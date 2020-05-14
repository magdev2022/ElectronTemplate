import * as React from "react";
import TaskControl from "../Components/TaskControl";
import { TitleBar } from "../Components/TitleBar";
export default function TaskBoard() {
  return (
    <div>
      <TitleBar />
      <TaskControl />
    </div>
  );
}
