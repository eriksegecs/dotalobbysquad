
import Link from 'next/link'
import { UserAccountNav } from './UserAccountNav'
import { NextApiRequest, NextApiResponse } from 'next/types'
import { getAuthOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'

interface NavBarProps {
    session: Session | null
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

export async function NavBar(req: Request) {

    const authOptions = getAuthOptions(req)

    const session = await getServerSession(authOptions)

    return (
        <nav id='menu' className='z-50 sticky lg:top-0 w-full flex ss:flex-wrap justify-center p-4 bg-black border border-b-yellow-200 border-x-transparent text-white'>
            <div className='mr-6 flex ss:w-full w-auto ss:justify-between'>
                <div className='flex flex-wrap'>
                    <a href='https://eriksegecs.github.io/dotalobbysquad/' className='font-alt uppercase text-3xl tracking-tight'>DotaLobbySquad</a>
                </div>

            </div>
            <div className={`ss:w-full w-auto   flex lg:items-center justify-between`}>
                <div className='text-sm md:flex-grow items-center font-alt flex-shrink-0'>
                    <Link href='/#title' className={`block lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4`}>Home</Link>
                    <Link href='/#about' className={`block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 lg:pl-4`}>Conteúdo</Link>
                    <Link href='/#mmr' className={`block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 lg:pl-4`}>MMR</Link>
                    <Link href='/#table' className={`block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 lg:pl-4`}>Tabela</Link>
                    <Link href='/#tournament' className={`block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 lg:pl-4`}>Chaves</Link>
                    <Link href='/catchphrases' className={`block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 lg:pl-4`}>Bordões</Link>
                    <Link href='/rules' className={`block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 lg:pl-4`}>Regras</Link>
                    <Link href='/playerstable' className={`block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 lg:pl-4`}>Mercado de Players</Link>
                </div>
                <div className='mt-6 lg:mt-0'>
                {session?.user ? (
                    <UserAccountNav user={session.user}/>
                ) : (
                    <Link href='/sign-in' className='text-sm font-alt uppercase px-4 py-2 border-2 border-yellow-500 rounded-full hover:bg-yellow-400 font-bold tracking-widest'>Login</Link>
                )}
                </div>
            </div>
        </nav>
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

function getAuthSession(authOptions: any) {
    throw new Error('Function not implemented.')
}
