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
    setNewCount?: number;
    setNewProgress?: boolean;
}

// Functional component. const, name of component, type (React.FC), is equal to, arrow function. Logic goes in lines below

const count = 0;

export const Todo: React.FC<TodoProps> = (props: TodoProps) => {
    const [checked, setChecked] = React.useState(props.completed);
    const [newCount, setNewCount] = React.useState(props.count || 0);
    const [newProgress, setNewProgress] = React.useState(props.status);
    const RedOrGreen = checked ? 'completed' : 'incomplete';
    //   const CheckboxCount = 
    return (
        <div className={RedOrGreen} key={props.taskuid}>
            <h1>{props.description}</h1>
            <h2>{props.status}</h2>
            <h2>{props.completed ? 'true' : 'false'}</h2>
            <input
                type="checkbox"
                checked={checked}
                onChange={() => {
                    setChecked(!checked);
                    setNewCount(newCount + 1);
                    setNewProgress(String(true));
                }}
            />
            <h2>{newCount}</h2>
        </div>
    )
}

// Double pipe is a logical OR operator. If the first value is true, it will return the first value. If the first value is false, it will return the second value.

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
