
'use client'
import { Copyright } from '@/components/Copyright'
import { NavBarCatchphrases } from '@/components/NavBarCatchphrases'
import { Catchphrases } from '@/components/Catchphrases'

export default function CatchphrasesHome() {

    return (
      <>
        <NavBarCatchphrases />
        <Catchphrases />
        <Copyright />
      </>
    )
}