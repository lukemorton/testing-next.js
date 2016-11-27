import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'
import Shout from '../components/Shout'
import Gallery from '../components/Gallery'
import Articles from '../components/Articles'
import Glyph from '../components/Glyph'
import articles from '../data/articles'

export default class extends React.Component {
  static async getInitialProps () {
    return { articles }
  }

  render () {
    return (
      <Page title='Made Tech - Improving software delivery in every organisation'>
        <Shout>
          <h1>
            Improving software delivery in every organisation
          </h1>
        </Shout>

        <Gallery>
          <img src="/static/office/team.jpg" />
          <img src="/static/office/laptop.jpg" />
          <img src="/static/office/crows.jpg" />
        </Gallery>

        <Glyph />

        <Articles
          title={<h2>Latest Articles</h2>}
          articles={this.props.articles}
          finalLink={<Link href='/articles'>See all articles</Link>} />
      </Page>
    )
  }
}
