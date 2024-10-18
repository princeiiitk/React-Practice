/* eslint-disable react/prop-types */
import { useState } from "react";
import useTode from "../Context/TodoContext"


export default function Todoitems({todo}) {
    const {DeleteTodo,  Updatetodo } = useTode();
    const [edit, setedit] = useState(false);
    const [tik,settik]=useState(false);
   
    const [chageTodo,setchangeTodo] = useState(todo.Todomsg); 
  
    
    const handleUpdate = () => {
         console.log(chageTodo)
        Updatetodo(todo.id, chageTodo );
        setedit(false)
    }
   
   
 
  return (
      <>
          
          <div className="h-30">
               <div className={`${tik ? "bg-red-800" : "bg-blue-600"}  w-[50%] ml-[28%] mt-2 h-[22%]  rounded-xl shadow-lg`}>
              <div className="h-20  ml-[1%]">
                  <input  onChange={()=>{settik((prev)=>!prev )}}  checked={tik}  type="checkbox" />
                  <input  onChange={(e)=>{setchangeTodo(e.target.value)}} value={!edit ? todo.Todomsg: chageTodo} readOnly={!edit} className="w-[70%] text-2xl font-sans h-14 rounded-xl m-1  mt-2 text-black "  type="text" />
                      <button onClick={() => {
                          if (edit) {
                              handleUpdate()
                          } else {
                              setedit(true)
                          }
                      }}
                          
                          className="m-2 text-xl bg-green-500 w-[11%] h-10 rounded-lg font-sans" type="button">{edit ? "Update":"Edit"}</button>
                  <button  onClick={()=>{DeleteTodo(todo.id)}} className="m-2 text-xl bg-red-600 w-[11%] h-10 rounded-lg font-sans" type="button">Delete</button>
              </div>
         </div> 
         </div>
      </>
  )
}
