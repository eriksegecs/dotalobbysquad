
'use client'

import Image from 'next/image'
import menu from '../assets/menu.svg'
import { useState } from 'react';


export function NavBarCatchphrases() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    
    return (
        <nav id="menu" className="z-50 sticky lg:top-0 w-full flex ss:flex-wrap justify-center p-4 bg-black border border-b-yellow-200 border-x-transparent text-white">
            <div className='mr-6 lg:mr-20 flex ss:w-full w-auto ss:justify-between'>
                <div className='flex flex-wrap'>
                    <a href='/' className="font-alt uppercase text-3xl tracking-tight">DotaLobbySquad</a>
                </div>
                <div className="lg:hidden">
                    <button className="px-3 py-2 border rounded border-teal-400 hover:border-white" onClick={toggleMenu}>
                        <Image className="" src={menu} alt="menu"/>
                    </button>
                </div>
            </div>
            <div className={`ss:w-full w-auto ${isMenuOpen ? 'block' : 'ss:hidden'} flex lg:items-center justify-between`}>
                <div className="text-sm md:flex-grow items-center font-alt flex-shrink-0">
                    <a href="/#title" className='block lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4'>Home</a>
                    <a href="/#about" className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 lg:pl-4'>Conteúdo</a>
                    <a href="/#mmr" className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 lg:pl-4'>MMR</a>
                    <a href="/#table" className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 lg:pl-4'>Tabela</a>
                    <a href="/#tournament" className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 lg:pl-4'>Chaves</a>
                    <a href="/catchphrases" className='block mt-4 lg:inline-block lg:mt-0 text-yellow-300 hover:text-yellow-500 mr-4 lg:pl-4'>Bordões</a>
                    <a href="/rules" className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-300 mr-4 lg:pl-4'>Regras</a>
                </div>
                <div className='mt-6 lg:mt-0 lg:ml-10'>
                    <a href="https://steamcommunity.com/openid/login?openid.ns=http://specs.openid.net/auth/2.0&openid.mode=checkid_setup&openid.return_to=https://www.lobbysquad.com.br/api/v1/auth/&openid.realm=https://www.lobbysquad.com.br/&openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select&openid.identity=http://specs.openid.net/auth/2.0/identifier_select" className="text-sm font-alt uppercase px-4 py-2 border-2 border-yellow-500 rounded-full hover:bg-yellow-400 font-bold tracking-widest">Login</a>
                </div>
            </div>
        </nav>
    )   
}