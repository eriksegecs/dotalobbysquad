
import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from '@/components/catchphrases/Avatar'
import { useState } from 'react'

export function Comment() {

    const [likeCount, setLikeCount] = useState(0)

    function handleLikeCount() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    function handleDeleteComment() {
    }

    return (
        <div className='mt-6 flex gap-4'>
            <Avatar />
            <div className='flex-1'>
                <div className='bg-[#29292e] rounded-lg p-4'>
                    <header className='flex items-start justify-between'>
                        <div className='flex flex-col'>
                            <strong className='leading-relaxed'>Christyan Segecs</strong>
                            <time title='11 de Maio às 08:13h' dateTime='2022-05-11 08:13:30' className='text-xs text-[#8d8d99]'>Cerca de 2h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário' className='hover:text-[#F75A68] bg-transparent rounded-sm transition-colors duration-200 ease-in-out'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p className='mt-4 text-[#c4c4cc]'></p>
                </div>
                <footer>
                    <button onClick={handleLikeCount} className='hover:text-yellow-400 bg-transparent text-[#8d8d99] rounded-sm flex items-center transition-colors duration-200 ease-in-out gap-1'>
                        <ThumbsUp />
                        Curtir<span className="before:px-1 before:content-['\2022']">{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}