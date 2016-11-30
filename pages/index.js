import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'
import Constrained from '../components/Constrained'
import Shout from '../components/Shout'
import Gallery from '../components/Gallery'
import SideBySide from '../components/SideBySide'
import WhiterContent from '../components/WhiterContent'
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
        backgroundImageSrc='/static/background.jpg'
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

          <Shout>
            <h2>We write software.</h2>
            <h2>We deliver change.</h2>
          </Shout>
        </Constrained>

        <Gallery>
          <SideBySide larger>
            <WhiterContent>
              <h2>We are software strategists.</h2>

              <p>
                We write software and shape long term software strategy. We define
                roadmaps, evolve delivery processes, hire CTO's and entire
                engineering teams.
              </p>

              <p>
                We are most useful when we can embed our delivery culture at
                every level of our customers organisations.
              </p>
            </WhiterContent>
          </SideBySide>

          <SideBySide smaller>
            <img src='/static/office/board.jpg' />
          </SideBySide>
        </Gallery>

        <Gallery>
          <SideBySide smaller>
            <img src='/static/office/ladder.jpg' />
          </SideBySide>

          <SideBySide larger>
            <WhiterContent>
              <h2>We teach continuous delivery.</h2>
              <p>
                We enable your business to move faster with modern software
                engineering practices. Continuous delivery is at the heart of our
                value to your organisation.
              </p>
            </WhiterContent>
          </SideBySide>
        </Gallery>

        <Gallery>
          <SideBySide larger>
            <WhiterContent>
              <h2>
                Work with us
              </h2>

              <p>
                We are always looking for our next adventure.
              </p>
            </WhiterContent>
          </SideBySide>

          <SideBySide smaller>
            <img src='/static/office/logo.jpg' />
          </SideBySide>
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
