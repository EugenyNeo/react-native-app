import {ADD_TODO, UPDATE_TODO, REMOVE_TODO} from '../type'

const handlers = {
    [ADD_TODO] : (state, {title}) =>({
        ...state, 
        todos: [...state.todo, 
            {
              id: Date.now().toString(),
              title
    }
   ]
}),
   [REMOVE_TODO] : (state, {id}) => ({
    ...state, 
    todos: state.todos.filter(todo => todo.d !== id)
   }),
   [UPDATE_TODO]: (state, {title, id}) =>({
    ...state, 
    todos: state.todos.map(todo =>{
    if(todo.id === id){
        todo.title = title
    }
    return todo
})
   }),

   DEFAULT : state => state
}
export const todoReducer =(state, action) =>{
 const handler = handlers[action.type]  || handlers.DEFAULT
 return handler(state, action)
}