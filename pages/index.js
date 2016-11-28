import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'
import Constrained from '../components/Constrained'
import Shout from '../components/Shout'
import Gallery from '../components/Gallery'
import SideBySide from '../components/SideBySide'
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

          <Shout calmly wider>
            <em>
              We transform the way organisations think about software, helping
              them deliver quality software, continuously.
            </em>
          </Shout>
        </Constrained>

        <Gallery>
          <SideBySide smaller>
            <img src='/static/office/board.jpg' />
          </SideBySide>

          <SideBySide larger>
            <h2>We live software engineering.</h2>

            <p>
              We write software.
              We help rescue projects and systems.
              We evolve delivery processes.
              We hire your next CTO and engineering team.
            </p>

            <p>
              We are experts in transforming large organisations into agile
              machines.
            </p>
          </SideBySide>
        </Gallery>

        <Gallery>
          <SideBySide larger>
            <h2>We teach continuous delivery.</h2>
            <p>
              We enable your business to move faster with modern software
              engineering practices. Continuous delivery is at the heart of our
              value to your organisation.
            </p>
          </SideBySide>

          <SideBySide smaller>
            <img src='/static/office/ladder.jpg' />
          </SideBySide>
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
