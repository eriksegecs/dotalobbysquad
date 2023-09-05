
'use client'
import { Copyright } from '@/components/Copyright'
import { NavBar } from '@/components/NavBar'
import { Rules } from '@/components/Rules'
import { ScrollToTopButton } from '@/components/ScrollToTopButton'
import { Catchphrases } from '@/components/Catchphrases'
import { HomePage } from '@/components/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Home() {
  
  return (
    <>
    <BrowserRouter >
      <div>
        {/* NavBar */}
        <NavBar />

        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/catchphrases' Component={Catchphrases} />
          <Route path='/rules' Component={Rules} />
        </Routes>
        
        {/* Copyright */}
        <Copyright />
        <ScrollToTopButton/>
      </div>
    </BrowserRouter >
    </>
  )
}