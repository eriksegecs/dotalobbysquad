import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function TwitchEmbed() {
  const [clips, setClips] = useState([]);
  const [clipIndex, setClipIndex] = useState(0);
  const [qtdClips, setQtdClips] = useState(100);
  const [clipsCompleto, setClipsCompleto] = useState([]);

  useEffect(() => {
    getPopularClipsFromChannel('dotalobbysquad', qtdClips);
  }, []);

  useEffect(() => {
    if (clips.length > 0) {
      updateIframeSlug();
    }
  }, [clipIndex, clips]);

  function updateIframeSlug() {
    if (clips.length > 0) {
      const slug = clips[clipIndex]?.node?.slug;
      const iframe = document.querySelector("#twitch-clips iframe");
      if (iframe) {
        iframe.setAttribute('src', `https://clips.twitch.tv/embed?clip=${slug}&parent=http://localhost:3000&autoplay=true&muted=true`);
      }
    }
  }

  function getRandomClip() {
    if (clipIndex >= clips.length) {
      setClipIndex(0);
      setClips([...clipsCompleto]);
    }

    const randomIndex = Math.floor(Math.random() * clips.length);
    const updatedClips = [...clips];
    updatedClips.splice(randomIndex, 1);

    setClipIndex(clipIndex + 1);
    setClips(updatedClips);

    return randomIndex;
  }

  function getPopularClipsFromChannel(channelName, qtdClips) {
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
      variables: {}
    };

    axios.post(url, data, {
      headers: {
        'Client-ID': 'kimne78kx3ncx6brgo4mv6wki5h1ko',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.data)
      .then(responseData => {
        if (
          responseData.data &&
          responseData.data.user &&
          responseData.data.user.clips &&
          responseData.data.user.clips.edges.length > 0
        ) {
          const fetchedClips = responseData.data.user.clips.edges;
          setClips(fetchedClips);
          setClipsCompleto([...fetchedClips]);
          setQtdClips(fetchedClips.length);
          setClipIndex(getRandomClip());
        } else {
          console.log('No popular clips found for the channel.');
        }
      })
      .catch(error => {
        console.error('An error occurred while fetching popular clips:', error);
      });
  }

  return (
    <iframe
      src={`https://clips.twitch.tv/embed?clip=${clips[clipIndex]?.node?.slug}&parent=http://localhost:3000&autoplay=true&muted=true`}
      height="<height>"
      width="<width>"
      allowFullScreen>
    </iframe>
  );
}
