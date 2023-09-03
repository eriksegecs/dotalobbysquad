
'use client'
import logo from '../../assets/ignite-logo.svg'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface Author {
    name: String;
    role: String;
    avatarUrl: string
}

interface Content {
    content: string
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[]
}

export function Post({ author, publishedAt, content } : PostProps) {

    const [comments, setComments] = useState([
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d' de 'LLLL' às 'HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className='bg-[#202024] rounded-md p-10 mt-8 first:mt-0'>
            <header className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <Avatar src={logo} />
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
               {content.map(line => {
                if (line.type === 'paragraph') {
                    return <p key={content} >{line.content}</p>
                } else if (line.type === 'link') {
                    return <p key={content} ><a href="#">{line.content}</a></p>
                }
               })}
            </div>

            <form onSubmit={handleCreateNewComment} className='w-full mt-6 pt-6 border-t border-[#323238]'>
                <strong className='leading-6 text-[#e1e1e6]'>Deixe seu feedback</strong>

                <textarea className='w-full bg-[#121214] border-2 border-[#202024] ring-1 ring-yellow-400 resize-none h-24 p-4 rounded-md text-[#e1e1e6] leading-5 mt-4 peer'
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required>
                </textarea>
                <footer className={`${isNewCommentEmpty ? "invisible max-h-0" : "max-h-full"}`}>
                    <button type='submit' disabled={isNewCommentEmpty} className='bg-[#00875f] text-white font-bold py-4 px-6 mt-4 rounded-md border-0 hover:bg-[#00b37e] transition-colors duration-200 ease-in-out'>Publicar</button>
                </footer>
            </form>
            <div className='mt-8'>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                })}
            </div>
        </article>
    )
}