import React from 'react'
import Layout from '../../components/Layout'
import Articles from '../../components/Articles'
import articles from '../../data/articles'

export default () =>
  <Layout title="Writings of Made Tech and friends">
    <Articles title={<h2>Writings of Made Tech and friends</h2>}
              articles={articles} />
  </Layout>
