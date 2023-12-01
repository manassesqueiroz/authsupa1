'use client'
import { createClient } from '@/utils/supabase/client'
import { Provider as typeProvider } from '@supabase/supabase-js'


export function SignInWithOAuth({provider , children}: {provider: typeProvider , children: React.ReactNode} ) {
  const signProvider = async () => {
    const supabase = createClient()
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider ,
      options: {
        redirectTo: `${location.origin}/auth/callback/`
      }
    })
    console.log(data)
    if (error) {
      throw error
    }
  }
  return(
      <button onClick={signProvider}>
        {children}
      </button>
  )
}

