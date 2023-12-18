import { redirect } from "next/navigation"
import { User } from "../lib/data"

export default async function Page() {  
  const user = await User()
  if(!user){
    redirect('/login')
  }
  console.log(user)
  return (
    <pre>{JSON.stringify(user, null, 2 )}</pre>
  )
} 