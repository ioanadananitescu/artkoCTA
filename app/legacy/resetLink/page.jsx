import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import ResetForm from '@app/reset-form'
import Navedit from '@components/NavEdit'



export default async function ResetLink() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <>
  <Navedit session={session}/>
  <ResetForm session={session} />
  </>
  )
}