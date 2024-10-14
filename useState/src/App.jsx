import { useState } from 'react'

import './App.css'

function App() {
  const [value, setvalue] = useState(0);
  const increament = () => {
    
    setvalue(value+1);
  }
  const decreament = () => {
    setvalue(value-1);
  }
  return (
    <>
      <div className='main'>
        <div>
          <button className='btn' onClick={increament}>increament {value}</button>
        </div>
        <br></br>
        <div>
          <button className='btn1' onClick={decreament}>decrement {value}</button>
        </div>
        
      </div>
    </>
  )
}

export default App
