import HeaderSystem from '@/components/atomo/headerSystem'
import ContainerActiones from '@/components/molecula/containerActiones/index'
import Transactions from '@/components/molecula/transactions'
import Wallet from '@/components/molecula/whallet'
import React from 'react'

export default function Home() {
  return (
    <div className='w-full min-h-[100vh] flex flex-col items-center bg-[#E9E9E9] pb-5 gap-5'>
      <HeaderSystem/>
      <section className='px-5 lg:max-w-[1200px] w-full min-h-[100vh] flex flex-col  gap-4'>

        <Wallet saldo='10 0000'/>
        <Transactions/>
        <ContainerActiones/>

      </section>
    </div>
  )
}
