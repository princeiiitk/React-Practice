
import { useState } from "react";
import Usercontex from "./Usercontex.js";

const contextprovider = ({ children }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [User,setUser]=useState(null)
    return (
        <>
            <Usercontex.Provider value={{User,setUser}}>
                {children}
           </Usercontex.Provider>
        </>
    )
}
export default contextprovider 