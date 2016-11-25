import React from 'react'
import Layout from '../../../components/layout'
import Article from '../../../components/article'

export default () =>
  <Layout title="A great article">
    <Article title={<h1>A great article</h1>}
             author="Luke">
      <p>Article</p>
    </Article>
  </Layout>
