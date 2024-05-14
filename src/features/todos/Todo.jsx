
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from './todoSlice';

function Todo({ todo }) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <li className="flex items-center justify-between border-b border-gray-300 py-2">
      <div className="flex items-center">
        <input type="checkbox" checked={todo.completed} onChange={handleToggle} className="mr-2" />
        <span className={todo.completed ? 'line-through' : ''}>{todo.title}</span>
      </div>
      <button onClick={handleDelete} className="text-red-500 hover:text-red-600">Delete</button>
    </li>
  );
}

export default Todo;