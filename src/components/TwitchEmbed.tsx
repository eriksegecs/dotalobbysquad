
import dynamic from 'next/dynamic'

const DynamicTwitchVideo = dynamic(() => import('react-twitch-embed-video'), {
  ssr: false,
})

export function TwitchEmbed() {

  return (
        <DynamicTwitchVideo
          channel='dotalobbysquad'
          layout="video"
          height="480"
          width="650"
        />
  );
}
