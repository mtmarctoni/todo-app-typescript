import { type FilterValue } from "../types"
import Filter from './Filters'

interface Props {
    activeCount: number,
    completedCount: number,
    filterSelected: FilterValue,
    onFilterChange: (filter: FilterValue) => void,
    onDeleteCompleted: ()  => void,
}

const Footer: React.FC<Props> = ({ activeCount, filterSelected, completedCount, onFilterChange, onDeleteCompleted }) => {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>Tareas pendientes: {activeCount}</strong>
            </span>
            <Filter
                filterSelected={filterSelected}
                onFilterChange={onFilterChange}
            />
            {
                (completedCount > 0) && (<button
                    className="clear-completed"
                    onClick={onDeleteCompleted}
                    >
                    Eliminar completadas
                </button>)          

            }
        </footer>
    )
}

export default Footer