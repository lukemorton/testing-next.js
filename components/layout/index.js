import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Tracking from '../tracking'
import style from './style'

export default ({ title, children }) =>
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/static/typography.css" />
    </Head>

    <header className={style.header}>
      <Link href="/">
        <img src="/static/logo.png"
             className={style.logo} />
      </Link>
    </header>

    <main className={style.main}>
      {children}
    </main>

    <Tracking />
  </div>
