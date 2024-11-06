import React from 'react'
import {type Todo, type TodoId, type TodoCompleted } from '../types'

//type Props = Todo

interface Props extends Todo {
    onRemoveTodo: (id: TodoId) => void,
    onToggleComplete: ({id, completed}: {id:  TodoId, completed: TodoCompleted}) => void
}

const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleComplete }) => {

    return (
        <div className="view">
            <input 
                className="toggle"
                checked={completed}
                type="checkbox"
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                    onToggleComplete({id, completed: e.target.checked})
                }}
            />
            <label>{title}</label>
            <button
                className="destroy"
                onClick={(): void => {
                    onRemoveTodo( id )
                }}
            >
            </button>

        </div>
    )

}

export default Todo;
