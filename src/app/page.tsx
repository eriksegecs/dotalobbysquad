
'use client'

import { Copyright } from '@/components/Copyright'
import { Header } from '@/components/Header'
import { Title } from '@/components/Title'
import { About } from '@/components/About'
import { Mmr } from '@/components/Mmr'
import { Table } from '@/components/Table'
import { Tournament } from '@/components/Tournament'
import { Rules } from '@/components/Rules'

import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'

export default function Home() {
  return (
    <BrowserRouter >
      <div>
        {/* Header */}
        <Header />

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

          <Route path="/rules" element={<Rules/>} />
        </Routes>
        
        {/* Copyright */}
        <Copyright />
      </div>
    </BrowserRouter >
  )
}
