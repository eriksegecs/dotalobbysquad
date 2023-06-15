import { Copyright } from '@/components/Copyright'
import { Header } from '@/components/Header'
import { Title } from '@/components/Title'
import { About } from '@/components/About'
import { Mmr } from '@/components/Mmr'
import { Table } from '@/components/Table'
import { Tournament } from '@/components/Tournament'
import { FakeComponent } from '@/components/FakeComponent'

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Title */}
      <Title />

      {/* About */}
      <About />

      {/* MMR */}
      <Mmr />

      {/* Table */}
      <Table />

      {/* Tournament */}
      <Tournament />
      
      {/* Copyright */}
      <Copyright />
    </div>
  )
}
