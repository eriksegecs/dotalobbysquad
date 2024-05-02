
import { db } from '@/lib/db'
import { PostFeed } from './PostFeed'
import { INFINITE_SCROLLING_PAGINATION_RESULTS } from '@/config'
import { notFound } from 'next/navigation'
import { NextApiRequest, NextApiResponse } from 'next/types'
import { getAuthOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'

interface CustomFeedProps {
    session: Session
}

interface User {
    name: string;
    email: string;
    image: string;
    id: string;
    username: string;
}

interface Session {
    user: User;
    expires: string;
}

export async function CustomFeed({ session } : CustomFeedProps) {

    // only rendered if session exists, so this will not happen
  if (!session) return notFound()

    const followedCommunities = await db.subscription.findMany({
        where: {
            userId: session?.user.id
        },
        include: {
            subreddit: true
        }
    })

    const posts = await db.post.findMany({
        where: {
            subreddit: {
                name: {
                    in: followedCommunities.map(({ subreddit }) => subreddit.id)
                }
            }
        },
        orderBy: {
            createdAt: 'desc'
        },
        include: {
            votes: true,
            author: true,
            comments: true,
            subreddit: true
        },
        take: INFINITE_SCROLLING_PAGINATION_RESULTS
    })

    return <PostFeed initialPosts={posts} />
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