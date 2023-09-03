
import logo from '../../assets/icon.ico'
import Image from 'next/image'

export function TopBar() {
    return (
        <header className='w-full bg-[#202024] text-white h-20 flex justify-center py-6 px-0 gap-2 items-center'>
            <Image src={logo} alt="logo" className="h-8 w-8" />
            <strong>DotaLobbySquad Feed</strong>
        </header>
    )
}