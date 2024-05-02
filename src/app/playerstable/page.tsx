
'use client'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
let DynamicPlayersTable = dynamic(() => import('@/components/PlayersTable'), {
  ssr: false,
});

export default function PlayersPage()  {

  const [componentLoaded, setComponentLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      DynamicPlayersTable = require('@/components/PlayersTable').default;
      setComponentLoaded(true);
    }
    
  }, [componentLoaded]);

  return (
      <div className='bg-black text-white h-screen'>
        <div className='container mx-auto p-4' data-aos='fade-up'>
          <h1 className='text-2xl font-bold mb-4'>Tabela de players</h1>
          { componentLoaded && <DynamicPlayersTable /> }
        </div>
      </div>
  )
}