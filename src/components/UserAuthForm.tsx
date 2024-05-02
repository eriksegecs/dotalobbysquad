
'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { cn } from '@/lib/utils'
import { Button } from './ui/Button'
import { toast } from '@/hooks/use-toast'
import Image from 'next/image'
import SteamLogo from '../../public/steam-logo.png'


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const loginWithSteam = async () => {
        setIsLoading(true)

        try {
            await signIn('steam')
        } catch (error) {
            toast({
                title: 'There was a problem',
                description: 'There was an error logging in with Steam',
                variant: 'destructive'
            })
        } finally {
            setIsLoading(false)
        }
    }

    return(
        <div className={cn('flex justify-center', className)}>
            <Button 
            onClick={loginWithSteam} 
            isLoading={isLoading} 
            size='sm' 
            className='w-full'>
                {isLoading ? null : <Image className='h-4 w-4 mr-2' src={SteamLogo} alt={''} />}
                Steam
            </Button>
        </div>
    )
}