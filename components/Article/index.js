import React from 'react'
import style from './style'
import ArticleHeader from '../ArticleHeader'
import Constrained from '../Constrained'

export default ({ title, author, publishedAt, children }) =>
  <Constrained>
    <article className={style.article}>
      <ArticleHeader
        title={title}
        author={author}
        publishedAt={publishedAt} />

      <div className={style.main}>
        {children}
      </div>
    </article>
  </Constrained>
