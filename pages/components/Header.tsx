import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'

function Header() {
  return (
    <header>
        <div>
            <HeaderItem title="HOME" ICON={}/>
        </div>
        <Image
            className='object-contain' 
            src='https://links.papareact.com/ua6'
            width={200}
            height={100}
            alt='hulu-logo'
        />
    </header>
  )
}

export default Header