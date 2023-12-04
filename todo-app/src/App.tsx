import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const todos = [
    { taskUID: '1', priority: 'High', status: 'InProgress', description: 'Complete the todo app', completed: false },
    { taskUID: '2', priority: 'Medium', status: 'Completed', description: 'Another task or something', completed: true },
    { taskUID: '3', priority: 'Low', status: 'Normal', description: 'A third task or something', completed: false },
  ];

  // find a way to go from todos that contains JSON elements -> an array that contains JSX elements

  // anonymous function
  const todoElements = todos.map(function (todo) {
    return (<div>
      <h3>{todo.description}</h3>
      <p>Priority: {todo.priority}</p>
      <p>Status: {todo.status}</p>
      <p>Completed</p>
    </div>);
  });

  // arrow function
  const todoElementsMap = todos.map(todo => {
    // map the JSON todo to a JSX element
    return (<div>
      <h3>{todo.description}</h3>
      <p>Priority: {todo.priority}</p>
      <p>Status: {todo.status}</p>
      <p>Completed</p>
    </div>);
  });

  // each component in React needs a root/parent element
  return (<div>
    {todoElementsMap}
  </div>
  );
}

export default App;

// For each element of the array, display a container that has the the UID, priority, status, description 
// ----> we will loop inside the array


// Looping
// forEach -> goes through the array and perform actions -> void
// map -> goes through the array, but expects to return something -> (object, string, etc.) -> used to modify the content of the array

// forEach