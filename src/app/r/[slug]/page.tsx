
// src/app/r/[slug]/page.tsx
import { MiniCreatePost } from '@/components/MiniCreatePost'
import { PostFeed } from '@/components/PostFeed'
import { INFINITE_SCROLLING_PAGINATION_RESULTS } from '@/config'
import { getServerSession } from 'next-auth'
import { db } from '@/lib/db'
import { notFound } from 'next/navigation'
import { getAuthOptions } from '@/lib/auth'
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next/types'

interface SlugPageProps {
    params: {
        slug: string
    }
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

export default async function SlugPage({ params, session }: SlugPageProps) {

    const { slug } = params

    const subreddit = await db.subreddit.findFirst({
        where: { name: slug },
        include: {
            posts: {
                include: {
                    author: true,
                    votes: true,
                    comments: true,
                    subreddit: true
                },
                orderBy: {
                    createdAt: 'desc'
                },

                take: INFINITE_SCROLLING_PAGINATION_RESULTS
            }
        }
    })

    if(!subreddit) return notFound()

    return(
        <>
            <h1 className='font-bold text-3xl md:text-4xl h-14'>
                r/{subreddit.name}
            </h1>
            <MiniCreatePost session={session} />
            <PostFeed initialPosts={subreddit.posts} subredditName={subreddit.name} />
        </>
    )
}

// Server-side rendering to fetch the session
interface CustomRequest extends NextApiRequest {
    cookies: Partial<{ [key: string]: string; }>
  }
export async function getServerSideProps(context:{ req: CustomRequest, res: NextApiResponse }) {
    const authOptions = getAuthOptions(context.req)
    const session = await getServerSession(context.req, context.res, authOptions)
  
    return {
      props: { session } // pass session to the page component as a prop
    }
  }