import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'
import Constrained from '../components/Constrained'
import Calm from '../components/Calm'
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
        <Constrained>
          <Calm>
            <em>We are software engineers with a vision</em>
          </Calm>

          <Shout>
            <h1>
              To improve software delivery in every organisation
            </h1>
          </Shout>

          <Calm>
            <em>
              We transform the way your company looks at software by providing
              a team of experts
            </em>
          </Calm>
        </Constrained>

        <Gallery>
          <img src="/static/office/team.jpg" style={{ width: '33.333%' }} />
          <img src="/static/office/laptop.jpg" style={{ width: '33.333%' }} />
          <img src="/static/office/crows.jpg" style={{ width: '33.333%' }} />
        </Gallery>

        <Glyph />

        <Constrained>
          <Articles
            title={<h2>Latest Articles</h2>}
            articles={this.props.articles}
            finalLink={<Link href='/articles'>See all articles</Link>} />
        </Constrained>
      </Page>
    )
  }
}
