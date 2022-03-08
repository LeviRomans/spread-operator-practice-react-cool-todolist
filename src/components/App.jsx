import React, { useState } from "react";

export default function App() {
  const [toDo, setToDo] = useState("");

  function changeHandler(e) {
    const value = e.target.value;
    setToDo(value);
  }

  const [toDoList, setToDoList] = useState([]);
  console.log(toDoList);

  function clickHandler() {
    if (toDo) {
      setToDoList([...toDoList, toDo]);
      console.log(toDoList);
      setToDo("");
    } else {
      alert("Type something to-do first!");
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={changeHandler} value={toDo} />
        <button onClick={clickHandler}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDoList.map((x) => (
            <li>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
