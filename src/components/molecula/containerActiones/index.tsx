"use client"
import React from 'react'
import FilterSelect from '@/components/molecula/FilterSelect'
import ItenFilter from '@/components/atomo/itenFilter'
import ItenActiones from '@/components/atomo/itenActiones'

export default function ContainerActiones() {
  return (
    <div className='bg-slate-100 w-full h-[300px] rounded-md shadow-xl '>
      <FilterSelect>
        <ItenFilter value='Todos' />
        <ItenFilter value='Recomendados' />
        <ItenFilter value='Em Alta' />
        <ItenFilter value='Em Baixa' />
      </FilterSelect>

      <div className='w-full flex'>
        <ul className='w-full px-5 py-2 columns-4 justify-items-center font-semibold text-sm border-b border-gray-300'>
          <li>Ativo</li>
          <li>Preço</li>
          <li>Percent</li>
          <li>segmento</li>
        </ul>
      </div>

      <div className='overflow-auto'>
        <ItenActiones
          name="Bitcoin"
          price="$34,000"
          percentage="+3.5%"
          segment="Cryptocurrency"
          onActionClick={() => console.log('Compra realizada!')}
          actionLabel="Investir"
        />
      </div>

    </div>
  )
}
