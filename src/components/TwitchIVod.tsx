
'use client'
import { useState, useEffect, useCallback } from 'react'

interface Clip {
  id: string;
  title: string;
  url: string;
  viewCount: number;
  durationSeconds: number;
  slug: string
}

export function TwitchIVod() {

  const [clips, setClips] = useState<Clip[]>([])
  const [currentClipIndex, setCurrentClipIndex] = useState<number>(0)

  const getPopularClipsFromChannel = useCallback(async (channelName: string, qtdClips: number) => {
    const url = 'https://gql.twitch.tv/gql'
    const query = `
      query {
        user(login: "${channelName}") {
          clips(first: ${qtdClips}) {
            edges {
              node {
                id
                title
                url
                viewCount
                durationSeconds
                slug
              }
            }
          }
        }
      }
    `

    const data = {
      query: query,
      variables: {}
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Client-ID': 'kimne78kx3ncx6brgo4mv6wki5h1ko',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        const responseData = await response.json()
        const clipData = responseData.data.user.clips.edges.map(
          (edge: { node: Clip }) => edge.node
        );
        const shuffledClipData = shuffleArray(clipData)
        setClips(shuffledClipData)
      } else {
        console.error('Failed to fetch data from Twitch API')
      }
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }, []);

  useEffect(() => {
    getPopularClipsFromChannel('dotalobbysquad', 10)
  }, [getPopularClipsFromChannel])

  function handleNextClip() {
    if (clips.length > 0) {
      setCurrentClipIndex((prevIndex) => (prevIndex + 1) % clips.length)
    }
  }

  function shuffleArray(array: Clip[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array;
  }

  return (
    <div>
      {clips.length > 0 ? (
        <>
          <iframe
            src={`https://clips.twitch.tv/embed?clip=${clips[currentClipIndex].slug}&parent=eriksegecs.github.io&autoplay=true`}
            width="640"
            height="360"
            allowFullScreen
          ></iframe>
          <button onClick={handleNextClip} className="lg:absolute lg:right-0 text-xs font-alt uppercase px-4 py-2 border-2 border-yellow-500 rounded-full text-white font-bold hover:bg-yellow-400 mt-4">Próximo Clip</button>
        </>
      ) : (
        <p>Loading clips...</p>
      )}
    </div>
  );
}
