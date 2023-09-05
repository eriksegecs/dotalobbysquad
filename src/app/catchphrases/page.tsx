
'use client'
import { Copyright } from '@/components/Copyright'
import { NavBar } from '@/components/NavBar'
import { Catchphrases } from '@/components/Catchphrases'

export default function CatchphrasesHome() {

    return (
      <>
        <NavBar />
        <Catchphrases />
        <Copyright />
      </>
    )
}