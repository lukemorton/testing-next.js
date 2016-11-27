import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Shout from '../../components/Shout'
import Gallery from '../../components/Gallery'
import Articles from '../../components/Articles'
import Article from '../../components/Articles/Article'
import Index from '../../pages'

test('contains shoutout', t => {
  const page = shallow(<Index />)
  t.is(page.find(Shout).length, 1)
  t.true(page.find(Shout).contains('To improve software delivery in every organisation'))
})

test('contains gallery', t => {
  const page = shallow(<Index />)
  t.is(page.find(Gallery).length, 1)
  t.true(page.find(Gallery).contains([
    <img src='/static/office/laptop.jpg' style={{ width: '33.333%' }} />,
    <img src='/static/office/logo.jpg' style={{ width: '33.333%' }} />,
    <img src='/static/office/tail.jpg' style={{ width: '33.333%' }} />
  ]))
})

test('contains articles', t => {
  const mockArticles = [{ title: 'Nice article' }, { title: 'Another article' }]
  const page = shallow(<Index articles={mockArticles} />)
  t.is(page.find(Articles).length, 1)
  t.is(page.find(Articles).shallow().find(Article).length, 2)
})
