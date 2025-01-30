import React from 'react';
import ToDoTask from './ToDoTask';

const ToDoList = ({ todos, onDelete }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <ToDoTask key={index} todo={todo} onDelete={() => onDelete(todo)} />
      ))}
    </div>
  );
};

export default ToDoList;
