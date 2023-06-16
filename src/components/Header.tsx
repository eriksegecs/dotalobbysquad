'use client'

import Image from 'next/image'
import menu from '../assets/menu.svg'
import { useState } from 'react';

export function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    
    return (
        <nav className="z-50 sticky lg:top-0 w-full flex ss:flex-wrap justify-center p-4 bg-gray-900 border border-b-yellow-200 border-x-transparent text-white">
            <div className='mr-6 flex ss:w-full w-auto ss:justify-between'>
                <div className='flex flex-wrap'>
                    <span className="font-alt uppercase text-3xl tracking-tight">DotaLobbySquad</span>
                </div>
                <div className="lg:hidden">
                    <button className="px-3 py-2 border rounded border-teal-400 hover:border-white" onClick={toggleMenu}>
                        <Image className="" src={menu} alt="menu"/>
                    </button>
                </div>
            </div>
            <div className={`ss:w-full w-auto ${isMenuOpen ? 'block' : 'ss:hidden'} flex lg:items-center justify-between`}>
                <div className="text-sm md:flex-grow items-center font-alt text-sm  flex-shrink-0">
                    <a href="https://www.lobbysquad.com.br/" className="block lg:inline-block lg:mt-0 text-yellow-300 hover:text-yellow-300 mr-4">Home</a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-yellow-300 mr-4 lg:pl-4">Conteúdo</a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-yellow-300 mr-4 lg:pl-4">MMR</a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-yellow-300 mr-4 lg:pl-4">Tabela</a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-yellow-300 mr-4 lg:pl-4">Chaves</a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-yellow-300 mr-4 lg:pl-4">Equipe</a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-yellow-300 mr-4 lg:pl-4">Bordões</a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-yellow-300 mr-4 lg:pl-4">Regras</a>
                </div>
                <div className='mt-6 lg:mt-0'>
                    <a href="#" className="text-sm font-alt uppercase px-4 py-2 border-2 border-yellow-300 rounded-full hover:bg-yellow-300 font-bold tracking-widest">Login</a>
                </div>
            </div>
        </nav>
    )   
}