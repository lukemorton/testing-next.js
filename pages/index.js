import React from 'react'
import Layout from '../components/layout'
import Articles from '../components/articles'

const articleData = [{ title: 'Article title',
                       href: '/blog/2016-11-25/great-article' }]

export default () =>
  <Layout title="Continuous Delivery">
    <Articles title={<h2>Latest Articles</h2>}
              articles={articleData} />
  </Layout>
