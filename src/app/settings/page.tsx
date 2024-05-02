
import { redirect } from 'next/navigation'

import { UserNameForm } from '@/components/UserNameForm'
import { getAuthOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { NextApiRequest, NextApiResponse } from 'next/types'

export const metadata = {
  title: 'Settings',
  description: 'Manage account and website settings.',
}

interface SettingsPageProps {
  session: Session
}

interface User {
  name: string
  email: string
  image: string
  id: string
  username: string
}

interface Session {
  user: User
  expires: string
}

export default async function SettingsPage({ session }: SettingsPageProps) {
    
  if (!session?.user) {
    redirect('/sign-in')
  }

  return (
    <div className='max-w-4xl mx-auto py-12'>
      <div className='grid items-start gap-8'>
        <h1 className='font-bold text-3xl md:text-4xl'>Settings</h1>

        <div className='grid gap-10'>
          <UserNameForm
            user={{
              id: session.user.id,
              username: session.user.username || '',
            }}
          />
        </div>
      </div>
    </div>
  )
}

// Server-side rendering to fetch the session
interface CustomRequest extends NextApiRequest {
  cookies: Partial<{ [key: string]: string; }>;
}
export async function getServerSideProps(context:{ req: CustomRequest, res: NextApiResponse }) {
  const authOptions = getAuthOptions(context.req)
  const session = await getServerSession(context.req, context.res, authOptions)

  return {
    props: { session } // pass session to the page component as a prop
  }
}