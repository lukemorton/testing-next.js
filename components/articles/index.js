import React from 'react'
import Article from './article'
import style from './style'

export default ({ title, articles }) =>
  <div className={style.articles}>
    {title}

    <ul>
      {articles.map((article, index) => <Article key={index} {...article} />)}
    </ul>
  </div>
