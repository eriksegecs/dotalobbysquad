
// src/app/r/[slug]/layout.tsx
import { db } from '@/lib/db'
import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { SubscribeLeaveToggle } from '@/components/SubscribeLeaveToggle'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/Button'
import { getAuthOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth/next'
import { NextApiRequest, NextApiResponse } from 'next/types'


interface LayoutProps {
    children: React.ReactNode,
    params: { slug : string },
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

export default async function Layout({ children, params: {slug}, session }: LayoutProps) {

    const subreddit = await db.subreddit.findFirst({
        where: { name: slug },
        include: {
            posts: {
                include: {
                    author: true,
                    votes: true
                }
            }
        }
    })

    const subscription = !session?.user
     ? undefined 
     : await db.subscription.findFirst({
        where: {
            subreddit: {
                name: slug
            },
            user: {
                id: session.user.id
            }
        }
     })

     const isSubscribed = !!subscription

     if(!subreddit) return notFound

     const memberCount = await db.subscription.count({
        where: {
            subreddit: {
                name: slug
            }
        }
        
     })

    return(
        <div className='sm:container max-w-7xl mx-auto pt-12 h-screen'>
            <div>
                {/* TODO: Button to take us back */}

                <div className='grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 py-6'>
                    <div className='flex flex-col col-span-2 space-y-6'>
                        {children}
                    </div>

                    {/* info sidebar */}
                    <div className='overflow-hidden h-fit rounded-lg border border-gray-200 order-first md:order-last'>
                        <div className='px-6 py-4'>
                            <p className='font-semibold py-3'>About r/{subreddit.name}</p>
                        </div>

                    <dl className='divide-y divide-gray-100 px-6 py-4 text-sm leading-6 bg-white'>
                        <div className='flex justify-between gap-x-4 py-3'>
                            <dt className='text-gray-500'>Created</dt>
                            <dd className='text-gray-700'>
                                <time dateTime={subreddit.createdAt.toDateString()}>
                                    {format(subreddit.createdAt, 'MMMM d, yyyy')}
                                </time>
                            </dd>
                        </div>

                        <div className='flex justify-between gap-x-4 py-3'>
                            <dt className='text-gray-500'>Members</dt>
                            <dd className='text-gray-700'>
                                <div className='text-gray-900'>{memberCount}</div>
                            </dd>
                        </div>

                        {subreddit.creatorId === session?.user?.id ? (
                            <div className='flex justify-between gap-x-4 py-3'>
                                <p className='text-gray-500'>You created this community</p>
                            </div>
                        ) : null}

                        {subreddit.creatorId !== session?.user.id ? (
                            <SubscribeLeaveToggle subredditId={subreddit.id} subredditName={subreddit.name} isSubscribed={isSubscribed} />
                        ) : null}

                        <Link href={`r/${slug}/submit`} className={buttonVariants({
                            variant: 'outline',
                            className: 'w-full mb-6'
                        })}> 
                            Create Post
                        </Link>
                    </dl>
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