import React, { useEffect, useState } from 'react';

export function TwitchIVod() {
  const [clips, setClips] = useState([]);
  const [currentClipIndex, setCurrentClipIndex] = useState(0);
  const CLIENT_ID = process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID;

  useEffect(() => {
    getPopularClipsFromChannel('dotalobbysquad', 10);
  }, []);

  useEffect(() => {
    if (clips.length > 0) {
      setCurrentClipIndex(0);
    }
  }, [clips]);

  async function getPopularClipsFromChannel(channelName, qtdClips) {
    const url = 'https://gql.twitch.tv/gql';
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
    `;

    const data = {
      query: query,
      variables: {},
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Client-ID': CLIENT_ID,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        const clipData = responseData.data.user.clips.edges.map(
          (edge) => edge.node
        );
        const shuffledClipData = shuffleArray(clipData);
        setClips(shuffledClipData);
      });
  }

  function handleNextClip() {
    if (clips.length > 0) {
      setCurrentClipIndex((prevIndex) => (prevIndex + 1) % clips.length);
    }
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div>
      {clips.length > 0 ? (
        <>
          <iframe
            src={`https://clips.twitch.tv/embed?clip=${clips[currentClipIndex].slug}&parent=https://eriksegecs.github.io/dotalobbysquad&autoplay=true`}
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
