import { Copyright } from '@/components/Copyright'
import { Header } from '@/components/Header'
import { Title } from '@/components/Title'
import { About } from '@/components/About'
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
      
      {/* Copyright */}
      <Copyright />
      
    </div>
  )
}
