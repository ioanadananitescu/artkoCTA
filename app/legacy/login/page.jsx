import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import LoginForm from '@app/legacy/login-form'
import Navedit from '@components/NavEdit'



export default async function Login() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <>
  <Navedit session={session}/>
  <LoginForm session={session} />
  </>
  )
}