import React from 'react'
import Link from 'next/link'
import ArticleHeader from '../ArticleHeader'
import style from './style'

const ArticleHeaderTitle = ({ title, href }) =>
  <div className={style.articleHeaderTitle}>
    <Link href={href}>{title}</Link>
  </div>

export default ({ title, author, href, excerpt }) =>
  <li className={style.article}>
    <ArticleHeader title={<ArticleHeaderTitle title={title} href={href} />}
                   author={author} />

    <div className={style.articleExcerpt}>
      {excerpt}
    </div>
  </li>
