
'use client'
import { Title } from '@/components/Title'
import { About } from '@/components/About'
import { Mmr } from '@/components/Mmr'
import { Table } from '@/components/Table'
import { Tournament } from '@/components/Tournament'
import { ScrollToTopButton } from '@/components/ScrollToTopButton'


export default function Home() {
  
  return (
      <div>
        <Title/>
        <About/>
        <Mmr/>
        <Table/>
        <Tournament/>
        <ScrollToTopButton/>
      </div>
  )
}