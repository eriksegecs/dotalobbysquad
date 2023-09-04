
'use client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Copyright } from '@/components/Copyright'
import { NavBar } from '@/components/NavBar'
import { Rules } from '@/components/Rules'
import { ScrollToTopButton } from '@/components/ScrollToTopButton'

import { CatchphrasesHome } from '@/app/catchphrases/page'
import { HomePage } from '@/app/home/page'

export function Home() {
  
  return (
    <BrowserRouter >
      <div>
        {/* NavBar */}
        <NavBar />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/catchphrases" element={<CatchphrasesHome />} />
          <Route path="/rules" element={<Rules/>} />
        </Routes>
        
        {/* Copyright */}
        <Copyright />
        <ScrollToTopButton/>
      </div>
    </BrowserRouter >
  )
}
