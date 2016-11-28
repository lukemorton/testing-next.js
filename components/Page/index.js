import React from 'react'
import Head from 'next/head'
import Header from '../Header'
import Glyph from '../Glyph'
import Tracking from '../Tracking'
import style from './style'

export default ({ title, backgroundImageSrc, children }) =>
  <div className={style.page({ backgroundImageSrc })}>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='stylesheet' href='/static/typography.css' />
    </Head>

    <Header />

    {children}

    <footer className={style.footer}>
      <p>
        <small><Glyph color='green' inline /></small>
        <strong>MadeTech</strong> are a software engineering organisation
        based in Southwark, London.
      </p>
    </footer>

    <Tracking />
  </div>
