
import { GeneralFeed } from '@/components/GeneralFeed'
import { CustomFeed } from '@/components/CustomFeed'
import { buttonVariants } from '@/components/ui/Button'
import { HomeIcon } from 'lucide-react'
import Link from 'next/link'
import { getAuthOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { NextApiRequest, NextApiResponse } from 'next/types'

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

interface SessionProps {
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


export default function CatchphrasesHome({ session } : SessionProps ) {

  return (
    <div className='container max-w-7xl mx-auto h-full pt-12'>
        <h1 className='font-bold text-3xl md:text-4xl'>Your feed</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 py-6'>
          {/* feed */}
          {session ? <CustomFeed /> : <GeneralFeed />}

          {/* subreddit info */}
          <div className='overflow-hidden h-fit rounded-lg border border-gray-200 order-first md:order-last'>
            <div className='bg-emerald-100 px-6 py-4'>
              <p className='font-semibold py-3 flex items-center gap-1.5'>
                <HomeIcon className='w-4 h-4' />
                Home
              </p>
            </div>

            <div className='-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6'>
              <div className='flex justify-between gap-x-4 py-3'>
                <p className='text-zinc-500'>
                  Your personal Reddit homepage. Come here to check in with your favorite communities.
                </p>
              </div>

              <Link href='/r/create' className={buttonVariants({
                className: 'w-full mt-4 mb-6'
              })}>Create Community</Link>
            </div>
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