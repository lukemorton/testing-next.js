import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Glyph from '../Glyph'
import Tracking from '../Tracking'
import style from './style'

export default ({ title, children }) =>
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='stylesheet' href='/static/typography.css' />
    </Head>

    <header className={style.header}>
      <Link href='/'>
        <img
          src='/static/logo.png'
          className={style.logo} />
      </Link>
    </header>

    <main className={style.main}>
      {children}
    </main>

    <footer className={style.footer}>
      <p>
        <small><Glyph color='green' inline /></small>
        <strong>MadeTech</strong> are a software engineering organisation
        based in Southwark, London.
      </p>
    </footer>
    <Tracking />
  </div>
