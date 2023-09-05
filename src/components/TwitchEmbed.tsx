
'use client'
import ReactTwitchEmbedVideo from 'react-twitch-embed-video'

export function TwitchEmbed() {

  return (
    <>
        <ReactTwitchEmbedVideo
          channel='dotalobbysquad'
          layout="video"
          height="480"
          width="650"
        />
    </>
  );
}
