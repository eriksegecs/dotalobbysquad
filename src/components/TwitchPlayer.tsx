
'use client'
import { TwitchEmbed } from '@/components/TwitchEmbed'
import { TwitchIVod } from '@/components/TwitchIVod'
import { useState, useEffect } from 'react'
import axios from 'axios'

export function TwitchPlayer() {
    
  const channelName = 'dotalobbysquad'

  const [isOnline, setIsOnline] = useState(false)

  const CLIENT_ID =  'ci4ag5duv10ezrt8umx49umbrrp2jb'
  const NEXT_PUBLIC_TWITCH_TOKEN =  'h6qrddqeojbp8rph1phjleps0ji358'

  useEffect(() => {
    async function obterToken() {
      try {
        const response = await axios.post(
          'https://id.twitch.tv/oauth2/token',
          null,
          {
            params: {
              client_id: CLIENT_ID,
              client_secret: NEXT_PUBLIC_TWITCH_TOKEN,
              grant_type: 'client_credentials'
            },
          }
        );
        return response.data.access_token
      } catch (error) {
        console.error('Erro ao obter token de acesso:', error)
        throw error
      }
    }

    async function verificarOnline() {
      try {
        const token = await obterToken()
        const response = await axios.get(
          `https://api.twitch.tv/helix/streams?user_login=${channelName}`,
          {
            headers: {
              'Client-ID': CLIENT_ID,
              Authorization: `Bearer ${token}`
            },
          }
        );

        const data = response.data
        if (data.data.length > 0) {
          console.log(`O canal ${channelName} está online!`)
          setIsOnline(true)
        } else {
          console.log(`O canal ${channelName} está offline.`)
          setIsOnline(false)
        }
      } catch (error) {
        console.error('Erro ao verificar status do canal:', error)
      }
    }

    verificarOnline()
  }, [channelName, CLIENT_ID, NEXT_PUBLIC_TWITCH_TOKEN])

    
    return (
        <div>
            {isOnline ? (
                <TwitchEmbed />
            ) : (
            <TwitchIVod />
            )}
        </div>
    );
}