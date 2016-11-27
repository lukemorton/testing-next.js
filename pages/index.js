import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'
import Constrained from '../components/Constrained'
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
          <Shout calmly>
            <em>We are software engineers with a vision</em>
          </Shout>
        </Constrained>

        <Shout
          background={
            <img src='/static/office/ladder.jpg' style={{ maxWidth: '22.9em' }} />
          }>
          <h1>
            To improve software delivery in every organisation
          </h1>
        </Shout>

        <Constrained>
          <Shout calmly>
            <em>
              We transform the way your organisation looks at software by
              providing engineering power
            </em>
          </Shout>
        </Constrained>


        <Gallery>
          <img src='/static/office/board.jpg' style={{ width: '50%' }} />

          <div style={{ margin: '0 4%', width: '42%' }}>
            <Shout calmly>
              <em>
                But we aren't just devs for hire, we seek to replace ourselves in
                your organisation with a sustainable delivery process
              </em>
            </Shout>
          </div>
        </Gallery>

        <Gallery>
          <img src='/static/office/logo.jpg' style={{ maxWidth: '40em', width: '100%' }} />
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
