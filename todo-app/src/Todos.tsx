import React from 'react';

interface TodoProps { 
    taskuid: string;
    priority: string;
    status: string; 
    description: string;
    completed: boolean; 
    }

// Functional component. const, name of component, type (React.FC), is equal to, arrow function. Logic goes in lines below


export const Todo : React.FC<TodoProps> = (props: TodoProps) => {
    const RedOrGreen = props.completed ? 'completed' : 'incomplete';
    return (
        <div className={RedOrGreen} key={props.taskuid}>
            <h1>{props.description}</h1>
            <h2>{props.status}</h2>
{// If this is true write not completed, if it is true, write completed
}
            <h2>{props.completed ? 'true' : 'false'}</h2>
        </div>
    ) 
}

// export Allows other parts of the project to use this line of code, by calling Todo as below
