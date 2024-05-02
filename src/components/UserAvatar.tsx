
import { User } from 'next-auth'
import { Avatar, AvatarFallback } from './ui/Avatar'
import { Icons } from './Icons'
import Image from 'next/image'
import { AvatarProps } from '@radix-ui/react-avatar'

interface UserAvatarProps extends AvatarProps {
    user: Pick<User, 'name' | 'image'>
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {

    return(
        <Avatar {...props}>
            {user.image ? (
                <div className='relative aspect-square h-full w-full'>
                    <Image fill 
                        src={user.image} 
                        alt='profile picture'
                        referrerPolicy='no-referrer'
                    />
                </div>
            ) : (
                <AvatarFallback>
                    <span className='sr-only'>{user?.name}</span>
                    <Icons.user className='h-4 w-4' />
                </AvatarFallback>
            )}
        </Avatar>
    )
}