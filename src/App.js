import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      setTodos([...todos, todoText]);
      setTodoText('');
    }
  };

  const handleDeleteTodo = (todoToDelete) => {
    setTodos(todos.filter((todo) => todo !== todoToDelete));
  };

  return (
    <div className="app">
      <h1>Todo list</h1>
      <div className="add-task">
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add a Task</button>
      </div>
      <ToDoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default App;
