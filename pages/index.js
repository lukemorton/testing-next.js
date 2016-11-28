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
      <Page
        title='Made Tech - Improving software delivery in every organisation'
        backgroundImageSrc='/static/background.png'
        >
        <Constrained>
          <Shout>
            <h1>
              Improving software delivery in every organisation.
            </h1>
          </Shout>

          <Shout calmly>
            <em style={{ display: 'block', margin: '0 -2.5em 0 -2.5em' }}>
              We transform the way organisations think about software, helping
              them deliver quality software, continuously.
            </em>
          </Shout>
        </Constrained>

        <Gallery>
          <img src='/static/office/board.jpg' style={{ width: '35%' }} />

          <div style={{ margin: '0 4%', width: '42%' }}>
            <h2>We live software engineering.</h2>
            <p>
              We write software.
              We can help rescue projects and systems.
              We evolve delivery processes.
              We hire your next CTO and engineering team.
            </p>

            <p>
              We are experts in transforming large organisations into agile
              machines.
            </p>
          </div>
        </Gallery>

        <Gallery>
          <div style={{ margin: '0 4%', width: '42%' }}>
            <h2>We teach continuous delivery.</h2>
            <p>
              We write software.
              We can help rescue projects and systems.
              We evolve delivery processes.
              We hire CTOs and engineering teams for you.
            </p>
          </div>

          <img src='/static/office/ladder.jpg' style={{ width: '35%' }} />
        </Gallery>

        <Shout>
          <h2>
            Work with us
          </h2>

          <p>
            We are always looking for our next adventure.
          </p>
        </Shout>

        <Gallery>
          <img src='/static/office/logo.jpg' style={{ maxWidth: '30em', width: '100%' }} />
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
