
'use client'
import Image from 'next/image'
import menu from '../assets/menu.svg'
import { useEffect, useState } from 'react';
import Link from 'next/link';

export function NavBar() {
    
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const [activeSection, setActiveSection] = useState('title');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let active = '';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const scrollPosition = window.pageYOffset;

                if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight - 50) {
                    active = section.id;
                }
            });

            setActiveSection(active);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <nav id="menu" className="z-50 sticky lg:top-0 w-full flex ss:flex-wrap justify-center p-4 bg-black border border-b-yellow-200 border-x-transparent text-white">
            <div className='mr-6 flex ss:w-full w-auto ss:justify-between'>
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
                    <Link href="/#title" className={`block lg:inline-block lg:mt-0 ${activeSection === 'title' ? 'text-yellow-300' : 'text-white'} hover:text-yellow-300 mr-4`}>Home</Link>
                    <Link href="/#about" className={`block mt-4 lg:inline-block lg:mt-0 ${activeSection === 'about' ? 'text-yellow-300' : 'text-white'} hover:text-yellow-300 mr-4 lg:pl-4`}>Conteúdo</Link>
                    <Link href="/#mmr" className={`block mt-4 lg:inline-block lg:mt-0 ${activeSection === 'mmr' ? 'text-yellow-300' : 'text-white'} hover:text-yellow-300 mr-4 lg:pl-4`}>MMR</Link>
                    <Link href="/#table" className={`block mt-4 lg:inline-block lg:mt-0 ${activeSection === 'table' ? 'text-yellow-300' : 'text-white'} hover:text-yellow-300 mr-4 lg:pl-4`}>Tabela</Link>
                    <Link href="/..#tournament" className={`block mt-4 lg:inline-block lg:mt-0 ${activeSection === 'tournament' ? 'text-yellow-300' : 'text-white'} hover:text-yellow-300 mr-4 lg:pl-4`}>Chaves</Link>
                    <Link href="/catchphrases" className={`block mt-4 lg:inline-block lg:mt-0 ${activeSection === 'catchphrases' ? 'text-yellow-300' : 'text-white'} hover:text-yellow-300 mr-4 lg:pl-4`}>Bordões</Link>
                    <Link href="/rules" className={`block mt-4 lg:inline-block lg:mt-0 ${activeSection === 'rules' ? 'text-yellow-300' : 'text-white'} hover:text-yellow-300 mr-4 lg:pl-4`}>Regras</Link>
                </div>
                <div className='mt-6 lg:mt-0'>
                    <a href="https://steamcommunity.com/openid/login?openid.ns=http://specs.openid.net/auth/2.0&openid.mode=checkid_setup&openid.return_to=https://www.lobbysquad.com.br/api/v1/auth/&openid.realm=https://www.lobbysquad.com.br/&openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select&openid.identity=http://specs.openid.net/auth/2.0/identifier_select" className="text-sm font-alt uppercase px-4 py-2 border-2 border-yellow-500 rounded-full hover:bg-yellow-400 font-bold tracking-widest">Login</a>
                </div>
            </div>
        </nav>
    )   
}