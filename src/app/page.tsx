
'use client'

import { Copyright } from '@/components/Copyright'
import { NavBar } from '@/components/NavBar'
import { Title } from '@/components/Title'
import { About } from '@/components/About'
import { Mmr } from '@/components/Mmr'
import { Table } from '@/components/Table'
import { Tournament } from '@/components/Tournament'
import { Rules } from '@/components/Rules'
import { ScrollToTopButton } from '@/components/ScrollToTopButton'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Catchphrases from '@/components/catchphrases/Catchphrases'

export default function Home() {
  
  return (
    <BrowserRouter >
      <div>
        {/* NavBar */}
        <NavBar />

        <Routes>
          <Route path='/' element={
            <>              
              <Title/>
              <About/>
              <Mmr/>
              <Table/>
              <Tournament/>
            </>
          } />

          <Route path="/catchphrases" element={
            <Catchphrases />
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
