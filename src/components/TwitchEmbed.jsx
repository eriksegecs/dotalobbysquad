
import { useState } from 'react';
import ReactTwitchEmbedVideo from 'react-twitch-embed-video';

export function TwitchEmbed({ channelName }) {
  const [isOnline, setIsOnline] = useState(false);

const CLIENT_ID = process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID;
const axios = require('axios');

async function obterToken() {
  try {
    const response = await axios.post('https://id.twitch.tv/oauth2/token', null, {
      params: {
        client_id: CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_TWITCH_TOKEN,
        grant_type: 'client_credentials',
      },
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Erro ao obter token de acesso:', error);
    throw error;
  }
}

async function verificarOnline() {
  try {
    const token = await obterToken();
    const response = await axios.get(`https://api.twitch.tv/helix/streams?user_login=${channelName}`, {
      headers: {
        'Client-ID': CLIENT_ID,
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = response.data;
    if (data.data.length > 0) {
      console.log(`O canal ${channelName} está online!`);
      setIsOnline(true);
    } else {
      console.log(`O canal ${channelName} está offline.`);
      setIsOnline(false);
    }
  } catch (error) {
    console.error('Erro ao verificar status do canal:', error);
  }
}

verificarOnline();

  return (
    <div>
      {isOnline ? (
        <ReactTwitchEmbedVideo
          channel={channelName}
          layout="video"
          height="480"
          width="650"
        />
      ) : (
        console.log('O canal esta Offline')
      )}
    </div>
  );
}