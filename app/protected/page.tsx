import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function ProtectedPage() {
  const supabase = createServerComponentClient({ cookies })
  
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect('/auth/login')
  }

  const { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', session.user.id)
    .single()

  if (error) {
    console.error('Error fetching profile:', error)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Protected Page</h1>
      <p className="mb-4">Welcome {session.user.email}</p>
      {profile && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Profile</h2>
          <pre className="bg-gray-100 p-4 rounded">
            {JSON.stringify(profile, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
} 