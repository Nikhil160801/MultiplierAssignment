import {useState} from "react";

export const ToDoInputForm=({tasksArr,setTasksArr})=>{
    const [inputObj,setInputObj]=useState({});

    function handleFormSubmit(e){
        e.preventDefault();
        if(!inputObj.content) return;

        const ifContentPresent=tasksArr.find((currTask)=>{
            if(currTask.content===inputObj.content){
                return true;
            }
        })
        
        if(ifContentPresent) {
            setInputObj({id:"",content:"",checked:false});
            return;
        }
    
        const updatedTaskArr=[...tasksArr,{id:inputObj.id,content:inputObj.content,checked:false}];
        setTasksArr(updatedTaskArr);
        setInputObj({id:"",content:"",checked:false});
    }
    localStorage.setItem("reactTodo",JSON.stringify(tasksArr));
    
    function handleChangeInput(newTask){
        setInputObj({id:newTask,content:newTask,checked:false});
    }

    return(<section>
        <form onSubmit={handleFormSubmit} className="form">
            <input 
            type="text" 
            value={inputObj.content} 
            onChange={(e)=>handleChangeInput(e.target.value)}
            autoFocus/>
            <button type="submit">Add Task</button>
        </form>
    </section>);
}