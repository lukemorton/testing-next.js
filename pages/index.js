import React from 'react'
import Layout from '../components/layout'
import Welcome from '../components/welcome'
import Articles from '../components/articles'

const articles = [{ title: 'A great article',
                    href: '/blog/2016-11-25/great-article' }]

export default () =>
  <Layout title="Continuous Delivery">
    <Welcome shoutout={<h1>Improving software delivery in every organisation</h1>} />

    <Articles title={<h2>Latest Articles</h2>}
              articles={articles} />
  </Layout>
