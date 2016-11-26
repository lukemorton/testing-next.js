import React from 'react'
import style from './style'
import ArticleHeader from '../ArticleHeader'

export default ({ title, author, publishedAt, children }) =>
  <article className={style.article}>
    <ArticleHeader
      title={title}
      author={author}
      publishedAt={publishedAt} />

    <div className={style.main}>
      {children}
    </div>
  </article>
