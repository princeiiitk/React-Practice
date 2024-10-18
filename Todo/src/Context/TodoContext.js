/* eslint-disable no-unused-vars */

import React from "react"
import { useContext } from "react";
export const TodoContext = React.createContext({
    Todos: [{
        id: "1",
        Todomsg: "hello",
        Completed:false
    }],
    
    AddTodo:    (id,Todomsg,Completed)=>{ },
    DeleteTodo: (id) => { },
    UpdateTodo: (id,Todomsg) => { },
    ToggleCompleted : (id) => { }

})
export const TodoProvider = TodoContext.Provider;

export default function useTode (){
    
    return useContext(TodoContext)
}


