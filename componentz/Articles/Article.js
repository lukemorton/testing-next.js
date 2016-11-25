import React from 'react'
import Link from 'next/link'
import style from './style'

export default ({ title, href, excerpt }) =>
  <li className={style.article}>
    <div className={style.articleTitle}>
      <Link href={href}>{title}</Link>
    </div>

    <div className={style.articleExcerpt}>
      {excerpt}
    </div>
  </li>
