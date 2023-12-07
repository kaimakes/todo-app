import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Todo, TodoButton } from './Todos';
import { CompletionInfoFlags } from 'typescript';

// Create an interface to define what each value should be 
interface AppProps {
  taskUID: string;
  priority: string;
  status: string;
  description: string;
  completed: boolean;
  checked: boolean;
  count?: number;
}

// Todo JSON
const App: React.FC = () => {
  const todos = [
    { taskUID: '1', priority: 'High', status: 'InProgress', description: 'Complete the todo app', completed: false },
    { taskUID: '2', priority: 'Medium', status: 'Completed', description: 'Another task or something', completed: true },
    { taskUID: '3', priority: 'Low', status: 'Normal', description: 'A third task or something', completed: false },
  ];


  // Task: find a way to go from todos that contains JSON elements -> an array that contains JSX elements

  // switch - case

  // Switch case. If it looks up the right value, it should display the right element. Then, I need to add the CSS property.
  // This function maps todo statuses to JSX elements. 
  function getTodoStatus(status: string): JSX.Element {
    switch (status) {
      case 'InProgress':
        return <p>InProgress</p>;
      case 'Completed':
        return <p>Completed</p>;
      case 'Normal':
        return <p>Normal</p>;
      default:
        return <p>Unknown</p>;
    }
  }

  // We need to use UseState and change the state of an item by clicking the checkbox.

  // arrow function
  const todoElementsMap = todos.map(todo => {
    // Map the JSON todo to a JSX element. This is a div with a key
   return <div key={todo.taskUID}>
    {/* Assign a key to this element, could be UID? */}
    <>
      <Todo
        taskuid={todo.taskUID}
        priority={todo.priority}
        status={todo.status}
        description={todo.description}
        completed={todo.completed}
      />

        {/* <TodoButton
          completed={todo.completed}
          checked={checked}
          onChange={() => handleCheckboxChange(todo.taskUID)}
        /> */}
    </>
  </div>
  });

  // Boolean for checking when to make todo.completed green
  // const RedOrGreen = todos.completed ? 'completed' : 'incomplete';

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