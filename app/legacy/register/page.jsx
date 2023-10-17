import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import RegisterForm from '@app/register-form'
import Navedit from '@components/NavEdit'



export default async function Register() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <>
  <Navedit session={session}/>
  <RegisterForm session={session} />
  </>
  )
}