import readUserSession from "./actions/getSession";
import { createClient } from "@/utils/supabase/server"
const supabase = createClient()

export async function User(){
  const user = await readUserSession()
  return user
}