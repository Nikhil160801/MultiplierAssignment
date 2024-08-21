import {useState} from "react";
import { ToDoInputForm } from "./ToDoInput";
import { DisplayToDo } from "./ToDoDisplay";

export function ToDo(){
    const [tasksArr,setTasksArr]=useState(()=>{
        const dataFromLocalStorage=localStorage.getItem("reactTodo");
        if(!dataFromLocalStorage) return [];
        else return JSON.parse(dataFromLocalStorage);
    });

    // const [tasksArr,setTasksArr]=useState([]);
    return(<section className="todo-container">
        <ToDoInputForm tasksArr={tasksArr} setTasksArr={setTasksArr}/>
        <DisplayToDo tasksArr={tasksArr} setTasksArr={setTasksArr}/>
    </section>);
}