
import Image from 'next/image'
import AboutImage from '../assets/twitch.png'
import { TwitchClips } from '@/components/TwitchClips'


export function Title() {
    return (
        <section id="title" className="bg-auto bg-cover bg-center min-h-screen lg:bg-fixed bg-[url(../assets/forest.gif)]">
            <div className="absolute inset-0 bg-black opacity-30"></div>

            <div className="md:flex-row lg:flex sm:flex-col text-center items-center justify-center lg:space-x-96">
                <div className="relative lg:pt-[450px] pt-[50px] order-1 col-lg-8">
                    <h1 className="text-5xl font-bold text-white font-sans">Dota<span className="text-yellow-300">Lobby Squad</span></h1>
                    <h2 className="text-2xl text-white">"Briga de ruins, qual é a graça?"</h2>
                    <div className="my-10">
                        <a href="https://discord.gg/7hStVBeWsQ" className="inline-block text-sm font-alt uppercase px-4 py-2 border-2 border-yellow-300 rounded-full text-white font-bold hover:bg-yellow-300 mt-4 lg:mt-0 m-5 tracking-widest">Discord</a>
                        <a href="https://www.twitch.tv/dotalobbysquad" className="inline-block text-sm font-alt uppercase px-4 py-2 border-2 border-yellow-300 rounded-full text-white font-bold hover:bg-yellow-300 mt-4 lg:mt-0 m-5 tracking-widest">Twitch</a>
                    </div>
                </div>
                <div className="relative lg:w-2/5 p-2 order-2 m-4">
                    <TwitchClips />
                    <a href="https://www.twitch.tv/dotalobbysquad" className="absolute right-0 text-sm font-alt uppercase px-4 py-2 border-2 border-yellow-300 rounded-full text-white font-bold hover:bg-yellow-300 mt-4">Próximo Clip</a>
                </div>
            </div>
        </section>
    )   
}