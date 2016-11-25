import React from 'react'
import Article from './article'
import style from './style'

export default ({ title, articles }) =>
  <div className={style.articles}>
    <header className={style.header}>
      {title}
    </header>

    <ul className={style.list}>
      {articles.map((article, index) => <Article key={index} {...article} />)}
    </ul>
  </div>
