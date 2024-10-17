import { useCallback, useEffect, useRef, useState } from "react"


function App() {
  const [length, setlength] = useState(10);
  const [SCharecter, setSCharecter] = useState(false);
  const [Number, setNumber] = useState(false);
  const [password, setPassword] = useState();
  const passcopy=useRef(null)
  const genratepasswords = useCallback(() => {
  
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (Number) {
      str = str + "123456789";
    }
    if (SCharecter) {
      str = str + "!@#$%^&*()_|}{:,./";

    }
    let pass = "";
    let char;
    for (let i = 0; i < length; i++){
      char = Math.floor(Math.random() * str.length);
      pass = pass + str.charAt(char);
    }
    
    setPassword(pass);

  },[Number,SCharecter,length])
  useEffect(() => {
    genratepasswords();
 

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[Number,SCharecter,length])
  const Copypassword = ()=>{
    passcopy.current?.select()
    window.navigator.clipboard.writeText(password)
}
  return (
    <>
      <div className=" mt-20 py-10 w-[70%] ml-[18%] rounded-xl bg-slate-400 flex flex-col items-center justify-center border-2 border-red-400 h-[80%]">
        <div className="w-full">
          <input type="text" value={password} ref={passcopy} className="w-[50%] h-12 ml-[30%] rounded-xl border-2 border-black text-xl font-sans" 
            
          />
          <button onClick={Copypassword} className="border-2 border-black w-20 h-10 rounded-sm bg-blue-700 text-xl font-sans">copy</button>
        </div>
        <div className="flex justify-around text-2xl font-sans ml-[10%]  p-3 mt-2 w-[50%]">
          <label className=" ">Length</label>
          <input type="range" max={80} min={10} onChange={(e)=>{setlength(e.target.value)}} className="" />
          <label className="">Charecter</label>
          <input type="checkbox" onClick={()=>{setSCharecter((prev)=>!prev)}} className="" />
          <label className="" >Number</label>
          <input type="checkbox" onClick={()=>{setNumber((prev)=>!prev)}} className=""/>
        </div>
      </div>
    </>
  )
}

export default App
