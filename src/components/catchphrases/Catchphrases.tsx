
import { Sidebar } from '@/components/catchphrases/Sidebar'
import { Post } from '@/components/catchphrases/Post'

const posts = [
    {
      id: 1,
      author: {
        name: 'Sorieh',
        role: 'Omi do urso'
      },
      publishedAt: new Date('2022-05-03 20:00:00')
    }
]

export function Catchphrases() {

    return (
        <div className='bg-[#121214] text-[#c4c4cc] border border-transparent'>
            <section className="max-w-screen-lg my-8 mx-auto px-4 grid grid-cols-1 gap-8 items-start text-sm md:text-md md:grid-cols-feed">
              <Sidebar />
              <main>
                {posts.map(post => {
                  return (
                    <Post
                      key={post.id}
                      author={post.author}
                      publishedAt={post.publishedAt} />
                  ) 
                })}
              </main>
            </section>
        </div>
    )
}