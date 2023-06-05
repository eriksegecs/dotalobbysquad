
import Image from 'next/image'
import AboutImage from '../assets/jugger.gif'
import checkCircle from '../assets/check-circle.svg'

export function About() {
    return (
        <div className="bg-black p-6">
            <div className="flex flex-wrap m-20 p-6 content items-center">
            <div className="lg:w-1/2 pr-4 pl-4 pt-4 lg:pt-0 order-2 lg:order-1">
                    <h3 className="font-alt text-2xl text-white">Transmissão ao vivo dos jogos</h3>
                    <ul>
                        <li className="font-sans text-white text-lg pl-2 m-3"><Image className="me-2 inline-block" src={checkCircle} alt="checked circle"/>Lobbys diários e Scrims</li>
                        <li className="font-sans text-white text-lg pl-2 m-3"><Image className="me-2 inline-block" src={checkCircle} alt="checked circle"/>Narração dos jogos oficiais</li>
                        <li className="font-sans text-white text-lg pl-2 m-3"><Image className="me-2 inline-block" src={checkCircle} alt="checked circle"/>Análise de partidas e MVPS</li>
                        <li className="font-sans text-white text-lg pl-2 m-3"><Image className="me-2 inline-block" src={checkCircle} alt="checked circle"/>Discord ativo em todos horários</li>
                    </ul>
                    <p className="font-sans text-white text-lg">Enquanto você lia, o Magus morreu 37 vezes.</p>
                </div>
                <div className="lg:w-1/2 pr-4 pl-4 order-1 lg:order-2">
                    <div className="object-scale-down">
                        <Image src={AboutImage} alt="twitch" />
                    </div>
                </div>
            </div>
        </div>
    )   
}