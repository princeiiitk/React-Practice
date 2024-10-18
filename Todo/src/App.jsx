import { useEffect, useState } from "react"
import {TodoProvider} from "./Context/TodoContext";
import Todoitems from "./Componenet/Todoitems";
import TodoForm from "./Componenet/TodoForm";

function App() {
  
  const [Todos, setTodos] = useState([]);

  useEffect(() => {
    const flag = localStorage.getItem("todo");
    if (flag) {
        const todos = JSON.parse(localStorage.getItem("todo"))
       if (todos.length > 0) {
      setTodos(todos)
    }
      }
      
  
 

   
  }, [])

  useEffect(() => {
    if (Todos.length > 0) {
      localStorage.setItem('todo', JSON.stringify(Todos))
    }
      
},[Todos])
  
  const AddTodo = (Todo) => {
    
    setTodos((prev) => 
      [{id:Date.now(),...Todo},...prev]
        )
   }
 
  const DeleteTodo = (id) => {
    setTodos((prev) => 
      prev.filter((idx) => 
           idx.id!==id
        )
     )
  }

  const Updatetodo = (id, Todo) => {
    if (Todo === "") {
      return;
    }
    setTodos((prev) => 
      prev.map((idx) =>
          idx.id === id ? {...idx, Todomsg : Todo} : idx
          )
      )
  }
  const ToggleCompleted = (id) => {
    
    setTodos((prev) => {
      prev.map((idx) =>
        idx.id === id ? {...idx,Completed:!idx.Completed} : idx)
          
        
    })

  }


  return (
    <>
      <TodoProvider value={{Todos,DeleteTodo,Updatetodo,AddTodo,ToggleCompleted}}>
        <div>
          <TodoForm >
           
          </TodoForm>
        </div>
        
        {
         
           Todos ? Todos.map((todo) => (
            <div key={todo.id}>
              <Todoitems todo={todo} />
            </div>
          )):null
        }
        
     
      </TodoProvider>
     
    </>
  )
}

export default App
