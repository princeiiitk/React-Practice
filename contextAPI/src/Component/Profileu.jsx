import { useContext } from "react"
import Usercontext from "../ContextApi/Usercontex"


export default function profile() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
  const {User} = useContext(Usercontext)
console.log(User)
  if(!User) return <h1>Not logged in </h1>
  return (
    <div>

        <h1>Profile : {User.username}</h1>
    </div>
  )
}
