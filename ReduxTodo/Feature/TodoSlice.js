import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{
        id: 1,
        text:"hello"
    }]
}
export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        AddTodo: (state, action) => {
            const newtodo = { id: nanoid(), text: action.payload };
            state.todos.push(newtodo);
            
        },
        DeleteTodo: (state, action) => {
             state.todos=state.todos.filter((idx)=>idx.id !== action.payload)
        },
       UpdataTodo: (state, action) => {
    state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
    );
}
    }

})
export const { AddTodo, DeleteTodo,UpdataTodo } = TodoSlice.actions
export default TodoSlice.reducer;