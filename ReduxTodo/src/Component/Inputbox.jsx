import { useState } from "react";
import { useDispatch } from "react-redux"
import { AddTodo } from "../../Feature/TodoSlice";

export default function Inputbox() {
    const Dispatcher=useDispatch()
    const [input,setinput]=useState("")
    const handlesubmit = (e) => {
        e.preventDefault();
        Dispatcher(AddTodo(input))
        setinput("")


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
                      <input value={input} onChange={(e)=>{setinput(e.target.value)}} type="text" className="w-[84%] h-12 rounded-2xl font-sans text-2xl" placeholder="Enter your Text" />
                       <button type="submit" className="ml-5 bg-blue-800 rounded-lg w-[10%]" >Add</button>
                  </form>
                  
              </div>
              
          
          </div>
          </div>
    </>
  )
}
