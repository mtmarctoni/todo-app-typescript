import { type FilterValue } from "../types"
import { FILTER_BUTTONS } from "../consts"

interface Props {
    filterSelected: FilterValue,
    onFilterChange:  (filter: FilterValue) => void,

}

const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {


    return (
        <ul className="filters">
            {
                Object.entries(FILTER_BUTTONS).map(([key, {literal, href}]) => (
                <li key={key}>
                    <a
                        className={`${key === filterSelected ? 'selected' : ''}`}
                        onClick={() => onFilterChange(key as FilterValue)}
                        href={href}
                    >
                        {literal}
                        
                    </a>
                </li>
                ))
            }
        </ul>
    )


}

export default Filters
/*
            <li>
                <a
                    className={`${filterSelected === 'all' ? 'selected' : ''}`}
                    onClick={() => onFilterChange('all')}
                >
                    Todos
                </a>
            </li>
            <li>
                <a
                    className={`${filterSelected === 'active' ? 'selected' : ''}`}
                    onClick={() => onFilterChange('active')}
                >
                    Activos
                </a>
            </li>
            <li>
                <a
                    className={`${filterSelected === 'completed' ? 'selected' : ''}`}
                    onClick={() => onFilterChange('completed')}
                >
                    Completados
                </a>
            </li>

            */