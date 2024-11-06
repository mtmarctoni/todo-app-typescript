import { TodoCompleted, type ListOfTodos, type TodoId } from "../types" 
import Todo from "./Todo"

interface Props {
    todos: ListOfTodos,
    onRemoveTodo: (id : TodoId) => void,
    onToggleComplete: ({id, completed}: {id:  TodoId, completed: TodoCompleted}) => void
}

const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleComplete }) => {

    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id} className={`${todo.completed ?  'completed' : ''}`}>
                    <Todo
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onRemoveTodo={onRemoveTodo}
                        onToggleComplete={onToggleComplete}
                    />
                </li>
                ))}
        </ul>
    )

}

export default Todos;
