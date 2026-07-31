import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;

    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (indexToDelete) => {

    const updateTodo = todos.filter((todo,index) => {
      return index !== indexToDelete ;

    })
     setTodos(updateTodo);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>

      <div className="input-area">
        <input
          type="text"
          placeholder="Enter the task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTodo}>Add</button>
         <button onClick={deleteTodo}>Delete</button>
      </div>

      <ul>
        {todos.map((todo, index) => (
        <li key={index}>
  {todo}

  <button onClick={() => deleteTodo(index)}>
    Delete
  </button>
      </li> 
        ))}
      </ul>
    </div>
  );
}

export default App;