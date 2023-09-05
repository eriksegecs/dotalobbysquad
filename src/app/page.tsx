
'use client'
import { Copyright } from '@/components/Copyright'
import { NavBar } from '@/components/NavBar'
import { Title } from '@/components/Title'
import { About } from '@/components/About'
import { Mmr } from '@/components/Mmr'
import { Table } from '@/components/Table'
import { Tournament } from '@/components/Tournament'
import { ScrollToTopButton } from '@/components/ScrollToTopButton'

export default function Home() {
  
  return (
      <div>
        <NavBar />
        <Title/>
        <About/>
        <Mmr/>
        <Table/>
        <Tournament/>
        <Copyright />
        <ScrollToTopButton/>
      </div>
  )
}