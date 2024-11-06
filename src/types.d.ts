import { FILTER_VALUE } from "./consts"

export type TodoId = string
export type TodoTitle = string
export type TodoCompleted = boolean

export interface Todo {
    id: TodoId,
    title: TodoTitle,
    completed: TodoCompleted
}

//export type FilterValue = 'all' | 'active' | 'completed'   //simple enum method
export type FilterValue = typeof FILTER_VALUE[keyof typeof FILTER_VALUE]



export type ListOfTodos = Todo[]