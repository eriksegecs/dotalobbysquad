
import { TwitchEmbed } from '@/components/TwitchEmbed'
import { TwitchIVod } from '@/components/TwitchIVod'

export function Title() {

    return (
        <section id="title" className="bg-auto bg-center min-h-screen lg:bg-fixed bg-[url(../assets/forest.gif)]">
            <div className="absolute inset-0 bg-black opacity-30"></div>

            <div className="md:flex-row sm:flex sm:flex-col text-center items-center justify-center lg:space-x-20">
                <div className="relative lg:pt-[380px] pt-[50px] order-1 col-lg-8">
                    <h1 className="text-5xl font-bold text-white font-sans">Dota<span className="text-yellow-400">Lobby Squad</span></h1>
                    <h2 className="text-2xl text-white">"Briga de ruins, qual é a graça?"</h2>
                    <div className="my-10">
                        <a href="https://discord.gg/7hStVBeWsQ" className="inline-block text-xs font-alt uppercase px-4 py-2 border-2 border-yellow-500 rounded-full text-white font-bold hover:bg-yellow-400 mt-4 lg:mt-0 m-5 tracking-widest">Discord</a>
                        <a href="https://www.twitch.tv/dotalobbysquad" className="inline-block text-xs font-alt uppercase px-4 py-2 border-2 border-yellow-500 rounded-full text-white font-bold hover:bg-yellow-400 mt-4 lg:mt-0 m-5 tracking-widest">Twitch</a>
                    </div>
                </div>
                <div className="relative lg:w-2/5 p-2 order-2 md:ml-20">
                    <TwitchEmbed channelName="dotalobbysquad"/>
                    <TwitchIVod />
                </div>
            </div>
        </section>
    )   
}