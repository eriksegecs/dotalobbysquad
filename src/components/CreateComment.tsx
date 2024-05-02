
'use client'
import { useState } from 'react'
import { Label } from './ui/Label'
import { Textarea } from './ui/Textarea'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { CommentRequest } from '@/lib/validators/comment'
import axios, { AxiosError } from 'axios'
import { toast } from '@/hooks/use-toast'
import { Button } from './ui/Button'
import { useCustomToast } from '@/hooks/use-custom-toast'


interface CreateCommentProps {
    postId: string
    replyToId?: string
  }

export function CreateComment({ postId, replyToId }: CreateCommentProps) {

  const [input, setInput] = useState<string>('')
  const router = useRouter()
  const { loginToast } = useCustomToast()

  const { mutate: comment, isLoading } = useMutation({
    mutationFn: async ({ postId, text, replyToId }: CommentRequest) => {
      const payload: CommentRequest = { postId, text, replyToId }

      const { data } = await axios.patch(
        `/api/subreddit/post/comment/`,
        payload
      )
      return data
    },

    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          return loginToast()
        }
      }

      return toast({
        title: 'Something went wrong.',
        description: "Comment wasn't created successfully. Please try again.",
        variant: 'destructive',
      })
    },
    onSuccess: () => {
      router.refresh()
      setInput('')
    },
  })

    return(
        <div className='grid w-full gap-1.5'>
            <Label htmlFor='comment'>Your comment</Label>
            <div className='mt-2'>
                <Textarea
                id='comment'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={1}
                placeholder='What are your thoughts?'
                />

                <div className='mt-2 flex justify-end'>
                <Button
                    isLoading={isLoading}
                    disabled={input.length === 0}
                    onClick={() => comment({ postId, text: input, replyToId })}>
                    Post
                </Button>
                </div>
            </div>
        </div>
    )
}