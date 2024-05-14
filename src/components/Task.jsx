import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../features/todos/todoSlice';
import EditTodoForm from '../EditTodoForm'; 

function Task({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false); 
  const [showDetails, setShowDetails] = useState(false);

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(removeTodo(todo.id));
  };

  const handleEdit = () => {
    setIsEditing(true); 
  };

  const handleClick = () => {
    setShowDetails(!showDetails); 
  };

  return (
    <li className="flex items-center justify-between border-b border-gray-300 py-2" onClick={handleClick}>
      {isEditing ? (
        <EditTodoForm todo={todo} setIsEditing={setIsEditing} /> 
      ) : (
        <>
          <div className="flex items-center">
            <input type="checkbox" checked={todo.completed} onChange={handleToggle} className="mr-2" />
            <span className={todo.completed ? 'line-through' : ''}>{todo.title}</span>
          </div>
          <div>
            <button onClick={handleEdit} className="mr-2">Edit</button>
            <button onClick={handleDelete} className="text-red-500 hover:text-red-600">Delete</button>
          </div>
          
          {showDetails && (
            <div>
              <p>Description: {todo.description}</p>
              <p>Due Date: {todo.dueDate}</p>
              <p>Priority: {todo.priority}</p>
            </div>
          )}
        </>
      )}
    </li>
  );
}

export default Task;



