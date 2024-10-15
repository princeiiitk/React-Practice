

import { useState } from 'react';
import './App.css'


function App() {
  let [decimal, setdecimal] = useState();

  let [binary, setbinary] = useState("")
 
  const binarytodecimal = () => {
    let temp = Number(decimal);
    let str = "";
    while (temp > 0) {
      str = Math.floor(temp % 2) + str;
      temp = Math.floor(temp / 2);
    }
    setbinary(str)

    
  }
  
  return (
    <>
      <div className='flex flex-col items-center justify-center shadow-2xl w-[50%] border border-gray-500 rounded-lg ml-10'>
        <div className='flex flex-col items-center justify-center my-5 w-[100%]'>
          <label className='text-xl font-bold' htmlFor='Decimal'>Decimal Number</label>
          <input className='text-xl bg-slate-400 h-10 rounded-lg w-[50%]' onChange={(e)=>{setdecimal(e.target.value)}} placeholder='Enter Decimal Number' type='text' />
        </div>
        <div className='w-full'>
          <button className=' text-center font-serif text-xl btn btn-primary my-3 bg-blue-500 rounded-lg h-10 w-[20%]' onClick={binarytodecimal}>Convert</button>
        </div>
        <div className='flex flex-col items-center justify-center my-5 w-[100%]' >
             <label className='text-xl font-bold' htmlFor='username'>Binary Number</label>
          <input className=' text-md h-10 border-t-2 text-xl font-sans pl-20  rounded-lg w-[50%]' value={binary} placeholder='Binary number here' type='text' />
        </div>
    </div>
    </>
  )
}

export default App
