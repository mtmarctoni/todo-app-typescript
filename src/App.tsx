import { useEffect, useState } from "react"
import { fetchTodos, updateTodos } from './service/todos'
import Todos from './components/Todos'
import Footer from './components/Footer'
import Header from './components/Header'
import CopyRight from "./components/CopyRight"
import { type TodoCompleted, type TodoId, type FilterValue, type ListOfTodos, TodoTitle } from './types'
import { FILTER_VALUE } from "./consts"

const App = (): JSX.Element => {
  const [todos, setTodos] = useState<ListOfTodos>([])
  const [filterSelected, setFilerSelected] = useState<FilterValue>(FILTER_VALUE.ALL)
  
  useEffect(() => {
    
    /*
    const fetchTodos = async (): Promise<ListOfTodos> => {
      //console.log(process.env.VITE_API_MASTER_KEY)
      const res = await fetch(API_URL, {
          method: 'GET',
          headers: header
      })
      if (!res.ok) {
          console.error('Error fetching To Do list')
          return []
      }
      const {record} = await res.json() as {record: ListOfTodos}
      //console.log(record)
      
      return record    
  
    }
    */
    fetchTodos()
      .then(todos => {
        setTodos(todos)
      })
      .catch(err => {console.error(err)})


  }, [])
 
  const handleRemove = (id: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
    updateTodos(newTodos)
  }
  //Pick<Todo, 'id' | 'completed'>
  const handleCompleted = ({ id, completed }: { id: TodoId; completed: TodoCompleted}): void => {
    const newTodos = todos.map(todo => (todo.id === id) ? { ...todo,  completed} : todo)
    setTodos(newTodos)
    updateTodos(newTodos)
  }

  const handleFilterSelected = (filter: FilterValue): void => {
    setFilerSelected(filter)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  
  const filteredTodos = todos.filter(todo => {
    if (filterSelected === 'active') return !todo.completed
    if (filterSelected === 'completed') return todo.completed
    return todo
  })

  const handleDeleteCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
    updateTodos(newTodos)

  }
  
  const handleAddTodo = (newTodoTitle: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title: newTodoTitle,
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
    updateTodos(newTodos)

  }
  
  return (
    <div className='todoapp'>
      <Header
        onAddTodo={handleAddTodo}  
      />
      <Todos
        todos={filteredTodos}
        onRemoveTodo={handleRemove}
        onToggleComplete={handleCompleted}
      />
      <Footer
        activeCount={activeCount}
        completedCount={todos.length-activeCount}
        filterSelected={filterSelected}
        onFilterChange={handleFilterSelected}
        onDeleteCompleted={handleDeleteCompleted}
      />
      <CopyRight />
    </div>
  )
}

export default App
