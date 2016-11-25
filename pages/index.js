import React from 'react'
import Layout from '../components/layout'
import Shout from '../components/shout'
import Articles from '../components/articles'
import articles from '../data/articles'

export default () =>
  <Layout title="Continuous Delivery">
    <Shout>
      <h1>
        Improving software delivery<br />
        in every organisation
      </h1>
    </Shout>

    <Articles title={<h2>Latest Articles</h2>}
              articles={articles} />
  </Layout>
