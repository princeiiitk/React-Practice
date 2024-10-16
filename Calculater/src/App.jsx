import { useState } from "react"

function App() {
  
  let [expression, setexpression] = useState("");
  const handleClick = function (value1) { 
    if (value1 === "AC") {
      setexpression("");
    }
    else if (value1 === "DEL") {
      expression = expression.slice(0,-1);
      setexpression(expression)
    }
    else if (value1 === "=") {
       try {
       
        let result = eval(expression);
      setexpression(result);
    } catch (error) {
         setexpression(error.message);
    }
    }
    else {
      expression = expression + value1;
      setexpression(expression);
    }
  }
    


  return (
    <>
      <div className="w-full h-screen">
        <div className="flex flex-col items-cente justify-center  w-[50%] h-[60%] ml-20">
          <div className=" flex flex-col w-[50%] shadow-md">
               <input type="text" value={expression} placeholder="Enter Your Expression" className="bg-gray-200 ml-50 border-2 border-black h-14 mt-10 shadow-lg rounded-xl text-3xl font-serif "/>
          </div>
          <div className="bg-blue-500 rounded-lg flex flex-col items-center p-2 w-[50%] h-[90%] border-2 border-black">
            <div className="flex m-2 w-[100%] ">
              <button className="m-4 w-20 h-14 rounded-full font-serif text-2xl bg-gray-700 text-white" onClick={()=>handleClick('1')}>1</button>
            <button className="m-4 w-20 h-14 rounded-full font-serif text-2xl bg-gray-700 text-white" onClick={()=>handleClick('2')}>2</button>
            <button className="m-4 w-20 h-14 rounded-full font-serif text-2xl bg-gray-700 text-white" onClick={()=>handleClick('3')}>3</button>
            <button className="m-4 w-20 h-14 rounded-full font-serif text-2xl bg-gray-700 text-white" onClick={()=>handleClick('+')}>+</button>
            </div>
            <div className="flex m-2 w-[100%]">
            <button className="m-4 w-20 h-14 rounded-full font-serif text-2xl bg-gray-700 text-white" onClick={()=>handleClick('4')}>4</button>
            <button className="m-4 w-20 h-14 rounded-full font-serif text-2xl bg-gray-700 text-white" onClick={()=>handleClick('5')}>5</button>
            <button className="m-4 w-20 h-14 rounded-full font-serif text-2xl bg-gray-700 text-white" onClick={()=>handleClick('6')}>6</button>
            <button className="m-4 w-20 h-14 rounded-full font-serif text-2xl bg-gray-700 text-white" onClick={()=>handleClick('-')} >-</button>
            </div>
            <div className="flex m-2 w-[100%]">
             <button className="m-4 w-20 h-14 rounded-full font-serif text-2xl bg-gray-700 text-white" onClick={()=>handleClick('7')} >7</button>
            <button className="m-4 w-20 h-14 rounded-full font-serif text-2xl bg-gray-700 text-white" onClick={()=>handleClick('8')} >8</button>
            <button className="m-4 w-20 h-14 rounded-full font-serif text-2xl bg-gray-700 text-white" onClick={()=>handleClick('9')}>9</button>
            <button className="m-4 w-20 h-14 rounded-full font-serif text-2xl bg-gray-700 text-white" onClick={()=>handleClick('*')}>*</button>
            </div>
            <div className="flex m-2 w-[100%]">
           <button className="m-4 w-20 h-14 rounded-full font-serif text-2xl bg-gray-700 text-white" onClick={()=>handleClick('AC')}>AC</button>
            <button className="m-4 w-20 h-14 rounded-full font-serif text-2xl bg-gray-700 text-white" onClick={()=>handleClick('DEL')}>DEL</button>
            <button className="m-4 w-20 h-14 rounded-full font-serif text-2xl bg-gray-700 text-white" onClick={()=>handleClick('/')}>/</button>
            <button  className="m-4 w-20 h-14 rounded-full font-serif text-2xl bg-gray-700 text-white" onClick={()=>handleClick('=')}>=</button>
            </div>
            
            </div>
        </div>
        
    </div>
    </>
  )
}

export default App
