
import { Copyright } from '@/components/Copyright'
import { NavBarCatchphrases } from '@/components/NavBarCatchphrases'
import Catchphrases from '@/components/catchphrases/Catchphrases'


export default function CatchphrasesHome() {

    return (
      <>
        <NavBarCatchphrases />
        <Catchphrases />
        <Copyright />
      </>
    )
}