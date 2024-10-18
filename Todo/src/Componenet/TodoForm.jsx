import { useState } from "react";
import useTodo from "../Context/TodoContext";


export default function TodoForm() {
    const [Todomsg, setTodomsg] = useState("");
    const { AddTodo } = useTodo();
  
    const handlesubmit = (e) => {
        e.preventDefault();
        if (!Todomsg) return
        console.log("Todomsg", Todomsg)
        AddTodo({Todomsg,Completed:true});
        setTodomsg("");


    }
  return (
      <>
          <div className=" text-2xl font-sans text-bold ">
              <div className=" rounded-2xl shadow-lg h-[60%] mt-10 bg-slate-700 flex flex-col items-center w-[50%] ml-[28%]">
              <div className="text-white mt-7 text-3xl font-sans mb-2">
                  <span>Manage Your Todo</span>
              </div>
              <div className="mb-10 w-[80%] rounded-2xl bg-blue-800 shadow-xl">
                   <form onSubmit={handlesubmit}>
                      <input value={Todomsg} onChange={(e)=>{setTodomsg(e.target.value)}} type="text" className="w-[84%] h-12 rounded-2xl font-sans text-2xl" placeholder="Enter your Text" />
                       <button type="submit" className="ml-5 bg-blue-800 rounded-lg w-[10%]" >Add</button>
                  </form>
                  
              </div>
              
          
          </div>
          </div>
          
        
      </>
  )
}
