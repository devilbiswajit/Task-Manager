
import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (

    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-red-700 font-bold mb-4">Task Manager</h1>
      <TaskForm />
      <TaskList />
    </div>
    
  );
}

export default App;
