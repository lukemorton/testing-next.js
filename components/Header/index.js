import React from 'react'
import Link from 'next/link'
import style from './style'

export default () =>
  <header className={style.header}>
    <Link href='/'>
      <img
        src='/static/logo.png'
        className={style.logo} />
    </Link>
  </header>
