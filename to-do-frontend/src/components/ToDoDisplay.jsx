export function DisplayToDo({tasksArr,setTasksArr}){

    function handleDeleteBtn(deletingTask){
        const updatedDeleteTaskArr=tasksArr.filter(currTask=>currTask.content!=deletingTask.content);
        setTasksArr(updatedDeleteTaskArr);
    }

    function handleMarkBtn(markingTask){
        const updateTask = tasksArr.map((currTask) => {
            if (currTask.content == markingTask.content) {
              return { ...currTask, checked: !currTask.checked };
            } else {
              return currTask;
            }
          });
          setTasksArr(updateTask);
    }

    function handleClearAllBtn(){
        setTasksArr([]);
    }


    return( <ul className={`myUnOrdList todo-container`}>{
        tasksArr.map((currTask)=>{
            return( <li key={currTask.id} className={`todo-list todo-item`}>
                <span className={`${currTask.checked ? "checkList" : "notCheckList"}`}>{currTask.content}</span>
                {/* <span style={{ textDecoration: currTask.checked ? "line-through" : "none" }}>{currTask.content}</span> */}
                <button onClick={()=>handleDeleteBtn(currTask)} className="delete-btn">D</button>
                <button onClick={()=>handleMarkBtn(currTask)} className="check-btn">M</button>
            </li> );
        })
        }
        <button onClick={handleClearAllBtn} className="clear-btn">Clear All</button>
    </ul> );
}