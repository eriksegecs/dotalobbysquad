
'use client'
import { Title } from '@/components/Title'
import { About } from '@/components/About'
import { Mmr } from '@/components/Mmr'
import { Table } from '@/components/Table'
import { Tournament } from '@/components/Tournament'

export default function HomePage() {

    return (
        <>              
            <Title/>
            <About/>
            <Mmr/>
            <Table/>
            <Tournament/>
        </>
    )
}