import {createContext,useContext} from 'react'


export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (todo) => {},
    deleteTodo: (id) => {},
    togleCompleted: (id) => {},


})


export const TodoContextProvider = TodoContext.Provider

export function useTodo(){
    return useContext(TodoContext)
}