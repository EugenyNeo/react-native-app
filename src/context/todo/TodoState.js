import React, {useReducer} from 'react'
import {TodoContext} from './todoContext'
import {todoReducer} from './todoReducer'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../type'

export const TodoState = ({children}) =>{
const initialState = {
    todos: [
        { id: '1', title: 'Audi A4' },
        { id: '2', title: 'BMW X5' },
        { id: '3', title: 'Honda Pilot' }
    ]
}

  const [state, dispatch] =  useReducer(todoReducer, initialState)

  const addTodo = title => dispatch({type: ADD_TODO, title})

  const removeTodo = id => dispatch({type: REMOVE_TODO, id})

  const updateTodo =  (id, title) => dispatch({type:UPDATE_TODO, id, title}) 


    return <TodoContext.Provider 
    value={{
        todos: state.todos,
        addTodo,
        removeTodo,
        updateTodo
    }}
    >{children}</TodoContext.Provider>
}