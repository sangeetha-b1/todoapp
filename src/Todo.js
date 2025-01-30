import React from 'react';

const Todo = ({ todo, onDelete }) => {
  return (
    <div>
      <span>{todo}</span>
      <button onClick={() => onDelete(todo)}>Delete</button>
    </div>
  );
};

export default Todo;
