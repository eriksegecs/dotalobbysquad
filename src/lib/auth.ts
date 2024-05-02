
import SteamProvider, { PROVIDER_ID } from 'next-auth-steam'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { db } from '@/lib/db'
import { nanoid } from 'nanoid'
import { NextAuthOptions } from 'next-auth';
import { NextApiRequest } from 'next';

export function getAuthOptions(req: Request | NextApiRequest) {
    const authOptions: NextAuthOptions = {
        adapter: PrismaAdapter(db),
        session: {
            strategy: 'jwt'
        },
        pages: {
            signIn: '/sign-in'
        },
        providers: [
            SteamProvider(req, {
                clientSecret: process.env.STEAM_SECRET,
                callbackUrl: 'http://localhost:3000/api/auth/callback/steam'
            })
        ],
        callbacks: {
            async session({ session, token }) {
                if(token) {
                    session.user.id = token.id
                    session.user.name = token.name
                    session.user.email = token.email
                    session.user.image = token.picture
                    session.user.username = token.username
                }
                return session
            },
            async jwt({ token, user }) {
                const dbUser = await db.user.findFirst({
                    where: {
                        email: token.email
                    }
                })
    
                if(!dbUser) {
                    token.id = user!.id
                    return token
                }
    
                if(!dbUser.username) {
                    await db.user.update({
                        where: {
                            id: dbUser.id
                        },
                        data: {
                            username: nanoid(10)
                        }
                    })
                }
    
                return {
                    id: dbUser.id,
                    name: dbUser.name,
                    email: dbUser.email,
                    picture: dbUser.image,
                    username: dbUser.username,
                }
            },
            redirect() {
                return '/'
            }
        }
    };
    return authOptions;
}
