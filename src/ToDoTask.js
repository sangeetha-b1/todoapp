import React from 'react';

const ToDoTask = ({ todo, onDelete }) => {
  return (
    <div className="todo-task">
      <span>{todo}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default ToDoTask;
