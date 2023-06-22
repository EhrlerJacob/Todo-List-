import React, {useState} from "react";
import './App.css';
import Todo from "./components/Todo"

function App() {

const [newTodo, setNewTodo] =  useState("");
const [todos, setTodos] = useState([]);



const handleNewTodoSubmit = (event) => {
  event.preventDefault();

  if (newTodo.length === 0) {
    return;
  }

  const todoItem = {
    text: newTodo,
    complete: false 
  }

  setTodos([...todos, todoItem]);
  setNewTodo("");
}

const handleTodoDelete = (delIdx) => {
  const filteredTodos = todos.filter((todo, i) => {
    return i !== delIdx;
  });
  setTodos(filteredTodos);
}

const handleTodoCompletion = (idx) => {
  const updatedTodos = todos.map((todo, i) => {
    if (idx === i ) {
      todo.complete = !todo.complete;
    }
    return todo;
  });
  setTodos(updatedTodos);
}

  return (
    <div className="App" style={{textAlign: "center"}}>
        <form className="text-bg-dark pb-3 col-md-4" onSubmit={(event) => {
          handleNewTodoSubmit(event);
        }}>
          <label className="mg-3">Todo Item:</label>
          <input className="form-control-md col-4 mb-3"
            onChange={(event) =>{
            setNewTodo(event.target.value);
          }} type="text" value={newTodo}/>
          <div>
            <button className="btn btn-primary">Add Todo</button>
          </div>
        </form>

        <h2 className="text-center">Your To-Do List:</h2>

        {todos.map((todo, i) => {
          
          return (
            <Todo
            key={i}
            todo={todo}
            handleTodoCompletion={handleTodoCompletion}
            handleTodoDelete={handleTodoDelete}
            i={i}/>       
          ); 
        })}
    </div>
  );
}

export default App;
