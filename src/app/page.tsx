
'use client'

import { Copyright } from '@/components/Copyright'
import { Header } from '@/components/Header'
import { Title } from '@/components/Title'
import { About } from '@/components/About'
import { Mmr } from '@/components/Mmr'
import { Table } from '@/components/Table'
import { Tournament } from '@/components/Tournament'
import { Rules } from '@/components/Rules'
import { ScrollToTopButton } from '@/components/ScrollToTopButton'


import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import { TwitchClips } from '@/components/TwitchClips'

export default function Home() {
  return (
    <BrowserRouter >
      <div>
        {/* Header */}
        <Header />

        <Routes>
          <Route path='/' element={
            <>
              <div className='min-h-screen'>
              <TwitchClips/>
              </div>
              
              <Title/>
              <About/>
              <Mmr/>
              <Table/>
              <Tournament/>
            </>
          } />

          <Route path="/rules" element={<Rules/>} />
        </Routes>
        
        {/* Copyright */}
        <Copyright />
        <ScrollToTopButton/>
      </div>
    </BrowserRouter >
  )
}
