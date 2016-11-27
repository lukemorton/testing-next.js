import React from 'react'
import Link from 'next/link'
import style from './style'

export default () =>
  <header className={style.header}>
    <Link href='/'>
      <a className={style.logo}>
        <img src='/static/logo.png' />
      </a>
    </Link>

    <nav className={style.nav}>
      <Link href='/'>software development</Link>
      <Link href='/'>continuous delivery</Link>
      <Link href='/articles'>our writings</Link>
      <Link href='/'>careers</Link>
    </nav>
  </header>
