
import { ImgHTMLAttributes } from 'react';
import Image from 'next/image'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
    src: string
}

export function Avatar({ hasBorder = true, src, ...props } : AvatarProps) {
    return (
        <Image src={src} alt='' className={'w-14 h-14 rounded-md border-4 border-[#202024] ring-2 ring-yellow-400'}></Image>
    )
}