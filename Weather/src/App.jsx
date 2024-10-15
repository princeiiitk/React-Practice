
import { useState } from "react"


function App() {
 
  const [city, setcity] = useState("");
  const [temp, settemp] = useState("")
  const [humidity, sethumidity] = useState("")
  const [wind, setwind] = useState("");
  const [pressure,setpressure]=useState("")

  console.log(city);
  const handlesearch = function () {
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7d071fbe0ce859f38fc52421fe538ec8`
    const fetchdata = async () => {
      try {
        const response = await fetch(url)
        
        let data = await response.json()
        console.log(data)
        settemp(data.main.temp)
        sethumidity(data.main.humidity)
        setwind(data.wind.speed)
        console.log(data.main.pressure)
       setpressure(data.main.pressure)
     
    }
    catch {
       console.error();
       
    }
    }
    fetchdata();
  }
    
       


  return (
    <>
      <div className="w-[100%] h-[100%] ">
         <div className="flex flex-col items-center justify-center  ml-30 h-[80%] w-[30%] bg-blue-500 rounded-xl ml-20">
        <div className="flex flex-col items-center justify-center w-[100%]  h-44 rounded-4xl shadow-xl">
          <label className="text-3xl">Enter City Name</label>
            <input onChange={(e) => { setcity(e.target.value) }} type="text" placeholder="Enter your City Name" className="bg-slate-200 m-7 w-[80%]  h-10 text-2xl font-sans rounded-lg" />
            <button className="text-3xl bg-green-400 rounded-2xl w-40 h-10 font-serif mb-2 shadow-md hover:bg-slate-300" onClick={handlesearch}>Search</button>
        </div>
        <div className="flex flex-col items-center justify-center w-[100%]  h-33">
          <div className="flex m-2 text-xl text-slate-900 font-medium">
               <span className="mr-10">temprature {temp} </span>
              <span className="">humidity {humidity}</span>
          </div>
          <div className="flex m-2 text-xl text-slate-900 font-medium">
              <span className="mr-10 ">wind Speed {wind}km/h</span>
              <span className="">ATM pressure {pressure}</span>
          </div>
          
        </div>
      </div>
      </div>
      
    </>
  )
}

export default App
