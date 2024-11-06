import { ListOfTodos } from "../types"

const API_URL = "https://api.jsonbin.io/v3/b/672b4816ad19ca34f8c52b0b"

const header = {
    'Content-Type': 'application/json',
    'X-Master-Key': import.meta.env.VITE_API_MASTER_KEY
}

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

const updateTodos = async (todos: ListOfTodos): Promise<boolean> => {

    const res = await fetch(API_URL, {
        method: 'PUT',
        headers: header,
        body: JSON.stringify(todos)
    })
    if (!res.ok) {
        console.error('Error  updating To Do list: ')
        return false
    }
    return res.ok
}

export {
    fetchTodos,
    updateTodos
    }
    
/*
const todos = [
    {
      id: '1',
      title: "Buy milk",
      completed: true
    },
    {
      id: '2',
      title: "Hablar con curve",
      completed: false
    },
    {
      id: '3',
      title: "acabar todo project",
      completed: false
    }
  ]

updateTodos(todos)
*/
