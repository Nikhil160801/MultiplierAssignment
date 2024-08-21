
export const ToDoDisplay = ({ tasksArr, setTasksArr }) => {
  function handleDeleteBtn(delTaskContent) {
    const afterDeleteArr = tasksArr.filter(
      (currTask) => currTask.content === delTaskContent
    );
    setTasksArr(afterDeleteArr);
  }

  function handleMarkBtn(markDownTask) {
    const updatedArr = tasksArr.map((currTask) => {
      if (currTask.content == markDownTask.content) {
        return { ...currTask, checked: !currTask.checked };
      } else {
        return currTask;
      }
    });
    setTasksArr(updatedArr);
  }

  return (
    <div className="displaydiv">
      {tasksArr.map((currTask) => {
        return (
          <div className="innerdiv" key={currTask.content}>
            <span className={`${currTask.checked ? "check" : "nocheck"}`}>
              {currTask.content}
            </span>
            <div className="">
              <button onClick={() => handleDeleteBtn(currTask.content)}>
                del
              </button>
              <button onClick={() => handleMarkBtn(currTask)}>M</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
