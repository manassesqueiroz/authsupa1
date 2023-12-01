import { redirect } from "next/navigation"
import readUserSession from "../lib/actions/getSession"

export default async function Page() {
  const { data } = await readUserSession()

  if (!data.session) {
    return redirect("/login")
  }
  return (
  <div>HELLO</div>
  )
} 