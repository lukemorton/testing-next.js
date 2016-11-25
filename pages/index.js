import React from 'react'
import Layout from '../components/Layout'
import Shout from '../components/Shout'
import Articles from '../components/Articles'
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
