import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const todos = [
    { taskUID: '1', priority: 'High', status: 'InProgress', description: 'Complete the todo app', completed: false },
    { taskUID: '2', priority: 'Medium', status: 'Completed', description: 'Another task or something', completed: true },
    { taskUID: '3', priority: 'Low', status: 'Normal', description: 'A third task or something', completed: false },
  ];


  return (

<div>
          <h3>{todos.description}</h3>
          <p>Priority: {todos.priority}</p>
          <p>Status: {todos.status}</p>
          <p>Completed 
        </div>
      ))}
    </div>
  );
}

export default App;

// For each element of the array, container that has the the UID, priority, status, description 
// forEach