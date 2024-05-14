import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from './features/todos/todoSlice';

function EditTodoForm({ todo, setIsEditing }) {
  const dispatch = useDispatch();
  const [editedTodo, setEditedTodo] = useState(todo); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTodo({
      ...editedTodo,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTodo(editedTodo)); 
    setIsEditing(false); 
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2">
      <input type="text" name="title" value={editedTodo.title} onChange={handleChange} className="border border-gray-300 rounded-md p-2 mr-2" />
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mr-2">Save</button>
      <button onClick={() => setIsEditing(false)} className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-md">Cancel</button>
    </form>
  );
}

export default EditTodoForm;
