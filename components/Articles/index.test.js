import test from 'ava'
import React from 'react'
import Articles from '.'
import Article from './Article'
import { shallow } from 'enzyme'

test('Articles should contain one or more Article\'s', t => {
  const mockArticle = { title: 'Nice article' }

  const articlesWithOneArticle = shallow(<Articles articles={[mockArticle]} />)
  t.is(articlesWithOneArticle.find(Article).length, 1)

  const articlesWithMoreThanOneArticle = shallow(<Articles articles={[mockArticle, mockArticle]} />)
  t.is(articlesWithMoreThanOneArticle.find(Article).length, 2)
})
