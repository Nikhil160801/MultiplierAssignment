import { useState } from "react";

export function ToDoInput({ tasks, setTasks }) {
  const [inputVal, setInputVal] = useState({});

  function handleTheChange(val) {
    setInputVal({ id: val, content: val, checked: false });
  }

  function handleSubmitBtn(e) {
    e.preventDefault(); // Prevents the default form submission behavior
    const { id, content, checked } = inputVal;
    if (!content) return;
    const ifContentPresent = tasks.find(
      (currTask) => currTask.content == content
    );
    if (ifContentPresent) return;

    setTasks((prevTasks) => [...prevTasks, { id, content, checked }]);
    setInputVal({ id: "", content: "", checked: false });
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSubmitBtn(e); // Pass the event to handleSubmitBtn
    }
  }

  return (
    <form onSubmit={handleSubmitBtn}>
      <input
        type="text"
        placeholder="Enter The Task"
        value={inputVal.content} // Ensure a string value is always provided
        onChange={(e) => handleTheChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button type="submit">Add Task</button>
      <div>{inputVal.content}</div>
    </form>
  );
}

