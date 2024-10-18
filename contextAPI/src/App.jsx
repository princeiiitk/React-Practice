import Login from "./Component/Login"
import Usercontextprovider from "./ContextApi/Usercontextprovider"

import Profileu from "./Component/Profileu"
function App() {


  return (
    <>
      <Usercontextprovider >
        <Login></Login>
       <Profileu></Profileu>
      </Usercontextprovider>
     
    </>
  )
}

export default App
