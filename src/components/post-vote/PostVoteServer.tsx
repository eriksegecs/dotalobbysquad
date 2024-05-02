
import { Post, Vote, VoteType } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation'
import { PostVoteClient } from './PostVoteClient'
import { NextApiRequest, NextApiResponse } from 'next/types'
import { getAuthOptions } from '@/lib/auth'

interface PostVoteServerProps {
    postId: string
    initialVotesAmt?: number
    initialVote: VoteType | null
    getData?: () => Promise<(Post & {votes: Vote[]}) | null>
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

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))

export async function PostVoteServer({ postId, initialVotesAmt, initialVote, getData, session }: PostVoteServerProps) {

    let _votesAmt: number = 0
    let _currentVote: VoteType | null | undefined = undefined

    if (getData) {
        const post = await getData()
        if (!post) return notFound()

        _votesAmt = post.votes.reduce((acc, vote) => {
            if (vote.type === 'UP') return acc + 1
            if (vote.type === 'DOWN') return acc - 1
            return acc
        }, 0)

        _currentVote = post.votes.find((vote) => vote.userId === session?.user.id)?.type
    } else {
        _votesAmt = initialVotesAmt!
        _currentVote = initialVote
    }

    return(
        <PostVoteClient postId={postId} initialVotesAmt={_votesAmt} initialVote={_currentVote} />
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