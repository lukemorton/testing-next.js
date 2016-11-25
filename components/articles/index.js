import React from 'react'
import Article from './article'
import style from './style'

export default ({ title, articles }) =>
  <div className={style.articles}>
    {title}

    <ul>
      <li>
        {articles.map((article) => <Article {...article} />)}
      </li>
    </ul>
  </div>
