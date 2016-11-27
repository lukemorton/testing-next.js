import React from 'react'
import Page from '../../components/Page'
import Constrained from '../../components/Constrained'
import Articles from '../../components/Articles'
import articles from '../../data/articles'

export default () =>
  <Page title='Writings of Made Tech and friends'>
    <Constrained>
      <Articles
        title={<h1>Our Writings</h1>}
        articles={articles} />
    </Constrained>
  </Page>
