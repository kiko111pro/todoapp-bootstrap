import React, { useState } from "react";
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    setInput("");
    setTodoList([...todoList, input])
  }
  
  const handleDelete = (index) => {
    var newList = todoList;
    newList.splice(index,1)
    setTodoList([...newList])
  }

  return (
    <div className="container bg-warning p-2 text-center">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3 text-center w-100">
          <input
            type="text"
            className="form-control w-25"
            value={input}
            onChange={(e) => {
              
              setInput(e.target.value);
            }}
            placeholder="Task To Do"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <button
          type="submit"
          className="btn btn-dark ml-2"
          disabled={!input}
        >
          Submit
        </button>
      </form>
      {/* --------------The MAP------------- */}
          <div className="container mt-3">
          {todoList.map((singleTodo, index) => (
          <div className="d-flex w-100 align-items-center">
            <li className="list-group-item list-group-item-dark w-100">{singleTodo}</li>
            <button className="btn btn-danger h-75 ml-3" onClick={()=>handleDelete(index)}>Delete</button>
          </div>))}
          </div>
    </div>
  );
}

export default App;
