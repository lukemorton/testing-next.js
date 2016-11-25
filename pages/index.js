import React from 'react'
import css from 'next/css'
import Layout from '../components/layout'
import Link from 'next/link'

export default () =>
  <Layout title="Continuous Delivery">
    <div className={style}>
      Hello world!

      <Link href="/blog/2016-11-25/great-article">Article</Link>
    </div>
  </Layout>

const style = css({
})
