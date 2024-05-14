import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todoSlice';

function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [dueDate, setDueDate] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTodo({
        title,
        description,
        priority,
        dueDate,
        completed: false,
      }));
      setTitle('');
      setDescription('');
      setPriority('');
      setDueDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter task title" className="border border-gray-300 rounded-md p-2 mb-2" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter task description" className="border border-gray-300 rounded-md p-2 mb-2"></textarea>
      <select value={priority} onChange={(e) => setPriority(e.target.value)} className="border border-gray-300 rounded-md p-2 mb-2">
        <option value="">Select priority</option>
        <option value="high">High priority</option>
        <option value="medium">Medium priority</option>
        <option value="low">Low priority</option>
      </select>
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} placeholder="Enter due date" className="border border-gray-300 rounded-md p-2 mb-2" />
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Add Task</button>
    </form>
  );
}

export default TaskForm;

