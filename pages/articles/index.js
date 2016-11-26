import React from 'react'
import Page from '../../components/Page'
import Articles from '../../components/Articles'
import articles from '../../data/articles'

export default () =>
  <Page title='Writings of Made Tech and friends'>
    <Articles
      title={<h2>Writings of Made Tech and friends</h2>}
      articles={articles} />
  </Page>
