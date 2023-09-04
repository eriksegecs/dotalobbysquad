
import Image from 'next/image'
import logo from '../assets/ignite-logo.svg'
import { PencilLine } from 'phosphor-react'
import { Avatar } from '@/components/Avatar'

export function Sidebar() {

    return (
        <aside className='bg-[#202024] overflow-hidden'>
            <Image src={logo} alt='image background' className='h-16 w-full object-cover'></Image>
            <div className='flex flex-col items-center justify-center -mt-8'>
                <Avatar src={logo}/>
                <strong className='mt-4 text-[#e1e1e6] leading-6'>Christyan Segecs</strong>
                <span className='text-sm text-[#8d8d99]'>Web Developer</span>
            </div>
            <footer className='border-t border-[#323238] mt-6 p-6'>
                <a href='/' className='w-full bg-transparent border text-yellow-300 border-yellow-400 rounded-md h-[50px] py-0 px-6 font-bold flex items-center justify-center gap-2 hover:bg-[#00875f] hover:duration-100 hover:text-white transition-colors duration-200 ease-in-out'>
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}