import { useState } from "react"
import { TodoTitle } from "../types"

interface Props {
    onAddTodo: (title: TodoTitle) => void
}

const CreateTodo: React.FC<Props> = ({ onAddTodo }) => {
    const [newTodo, setNewTodo] = useState<TodoTitle>('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onAddTodo(newTodo)
        setNewTodo('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="new-todo"
                value={newTodo}
                onChange={(e) => { setNewTodo(e.target.value) }}
                placeholder="Escribir tarea"
                autoFocus
                >
            </input>
        </form>
    )
} 

export default CreateTodo