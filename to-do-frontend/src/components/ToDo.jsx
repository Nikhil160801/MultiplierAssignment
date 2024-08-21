import { useState } from "react";
import { ToDoDisplay } from "./ToDoDisplay";
import { ToDoInput } from "./ToDoInput";

export const ToDo = () => {
  const [tasksArr, setTasksArr] = useState([]);
  return (
    <section className="border">
      <ToDoInput tasksArr={tasksArr} setTasksArr={setTasksArr} />
      <ToDoDisplay tasksArr={tasksArr} setTasksArr={setTasksArr} />
    </section>
  );
};
