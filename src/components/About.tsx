
import Image from 'next/image'
import AboutImage from '../assets/twitch.png'
import checkCircle from '../assets/check-circle.svg'

export function About() {
    return (
        <div className="bg-black p-6">
            <div className="flex flex-wrap m-20 p-6 content-center justify-center items-center justify-items-center">
                <div className="lg:w-1/2 order-2 lg:order-1">
                    <h3 className="font-alt text-2xl text-white m-4">Transmissão ao vivo dos jogos</h3>
                    <ul>
                        <li className="font-sans text-white text-lg pl-2 m-3"><Image className="me-2 inline-block" src={checkCircle} alt="checked circle"/>Lobbys diários e Scrims</li>
                        <li className="font-sans text-white text-lg pl-2 m-3"><Image className="me-2 inline-block" src={checkCircle} alt="checked circle"/>Narração dos jogos oficiais</li>
                        <li className="font-sans text-white text-lg pl-2 m-3"><Image className="me-2 inline-block" src={checkCircle} alt="checked circle"/>Análise de partidas e MVPS</li>
                        <li className="font-sans text-white text-lg pl-2 m-3"><Image className="me-2 inline-block" src={checkCircle} alt="checked circle"/>Discord ativo em todos horários</li>
                    </ul>
                    <p className="font-sans text-white text-lg ml-4">Enquanto você lia, o Magus morreu 37 vezes.</p>
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2">
                    <Image src={AboutImage} className="transform hover:scale-105 duration-500 ease-in-out" alt="twitch" />
                </div>
            </div>
        </div>
    )   
}