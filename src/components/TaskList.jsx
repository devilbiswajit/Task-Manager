import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

function TaskList() {
  const todos = useSelector(state => state.todos.todos);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('none');


  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    return filter === 'completed' ? todo.completed : !todo.completed;
  });

  
  const sortedTodos = filteredTodos.slice().sort((a, b) => {
    if (sort === 'priority') {
    
      if (a.priority === 'high' && b.priority !== 'high') return -1;
      if (a.priority !== 'high' && b.priority === 'high') return 1;
      if (a.priority === 'medium' && b.priority === 'low') return -1;
      if (a.priority === 'low' && b.priority === 'medium') return 1;
      return 0;
    } else if (sort === 'dueDate') {
      return new Date(a.dueDate) - new Date(b.dueDate);
    } else {
      return 0;
    }
  });

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Task List</h2>
      <div className="flex mb-2">
        <label className="mr-2">Filter:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="border border-gray-300 rounded-md p-2 mr-2">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
        <label className="mr-2">Sort By:</label>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="border border-gray-300 rounded-md p-2">
          <option value="none">None</option>
          <option value="priority">Priority</option>
          <option value="dueDate">Due Date</option>
        </select>
      </div>
      <ul>
        {sortedTodos.map(todo => (
          <Task
            key={todo.id}
            todo={todo}
            
            description={todo.description}
            dueDate={todo.dueDate}
            priority={todo.priority}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;







