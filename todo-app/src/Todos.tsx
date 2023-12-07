import React, { ChangeEventHandler } from 'react';

interface TodoProps {
    taskuid: string;
    priority: string;
    status: string;
    description: string;
    completed: boolean;
    onChange?: () => {};
    checked?: boolean;
    count?: number;
}

// Functional component. const, name of component, type (React.FC), is equal to, arrow function. Logic goes in lines below

const count = 0;

export const Todo: React.FC<TodoProps> = (props: TodoProps) => {
    const [checked, setChecked] = React.useState(props.completed);
    const RedOrGreen = checked ? 'completed' : 'incomplete';
    //   const CheckboxCount = 
    return (
        <div className={RedOrGreen} key={props.taskuid}>
            <h1>{props.description}</h1>
            <h2>{props.status}</h2>
            {// If this is true write not completed, if it is true, write completed
            }
            <h2>{props.completed ? 'true' : 'false'}</h2>
            <input
                type="checkbox"
                checked={checked}
                onChange={() => {
                    setChecked(!checked);
    //                props.count(props.count || 0) + 1);
                }}
            />
            <h2>{props.count}</h2>
        </div>
    )
}

export const TodoButton: React.FC<TodoProps> = ({ completed, onChange, checked }) => {
    return (
        <div>
            <label>
                <input type="checkbox" checked={checked} onChange={onChange} />
            </label>
        </div>
    )
}

// export Allows other parts of the project to use this line of code, by calling Todo as below
