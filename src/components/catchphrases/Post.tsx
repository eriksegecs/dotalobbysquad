
'use client'
import { Avatar } from '@/components/catchphrases/Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { FormEvent, useState } from 'react'

export function Post({ author, publishedAt }) {

    const [comments, setComments] = useState()

    const isNewCommentEmpty = ''

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d' de 'LLLL' às 'HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment() {
        setNewCommentText('')
    }

    return (
        <article className='bg-[#202024] rounded-md p-10 mt-8 first:mt-0'>
            <header className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <Avatar />
                    {/* <Avatar src={author.avatarUrl}  */} 
                    <div className='flex flex-col'>
                        <strong className='text-[#e1e1e6] leading-6'>{author.name}</strong>
                        <span className='text-sm text-[#8d8d99] leading-6'>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeNow}
                </time>
            </header>
            <div className='leading-6 text-[#c4c4cc] mt-6'>
            </div>

            <form onSubmit={handleCreateNewComment} className='w-full mt-6 pt-6 border-t border-[#323238]'>
                <strong className='leading-6 text-[#e1e1e6]'>Deixe seu feedback</strong>

                <textarea className='w-full bg-[#121214] border-2 border-[#202024] ring-1 ring-yellow-400 resize-none h-24 p-4 rounded-md text-[#e1e1e6] leading-5 mt-4 peer'
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    required>
                </textarea>
                <footer className={`${isNewCommentEmpty ? "invisible max-h-0" : "max-h-full"}`}>
                    <button type='submit' className='bg-[#00875f] text-white font-bold py-4 px-6 mt-4 rounded-md border-0 hover:bg-[#00b37e] transition-colors duration-200 ease-in-out'>Publicar</button>
                </footer>
            </form>
            <div className='mt-8'>
            </div>
        </article>
    )
}