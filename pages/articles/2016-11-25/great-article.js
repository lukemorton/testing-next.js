import React from 'react'
import Layout from '../../../components/layout'
import Article from '../../../components/article'

export const title = 'A great article'
export const author = 'Luke'

export default () =>
  <Layout title={title}>
    <Article title={<h1>{title}</h1>}
             author={author}>
      <p>
        Even though JavaScript is single-threaded, IO in Node.js can happen in
        parallel due to its async nature. AVA takes advantage of this and runs
        your tests concurrently, which is especially beneficial for IO heavy
        tests.
      </p>

      <p>
        In addition, test files are run in parallel as separate processes,
        giving you even better performance and an isolated environment for each
        test file. Switching from Mocha to AVA in Pageres brought the test time
        down from 31 sec to 11 sec. Having tests run concurrently forces you to
        write atomic tests, meaning tests don't depend on global state or the
        state of other tests, which is a great thing!
      </p>
    </Article>
  </Layout>
