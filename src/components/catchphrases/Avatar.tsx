
import Image from 'next/image'
import logo from '../../assets/ignite-logo.svg'

export function Avatar() {
    return (
        <Image src={logo} alt='' className='w-14 h-14 rounded-md border-4 border-[#202024] ring-2 ring-yellow-400'></Image>
    )
}