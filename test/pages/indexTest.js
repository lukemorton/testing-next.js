import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Shout from '../../components/Shout'
import Gallery from '../../components/Gallery'
import index from '../../pages'

test('index contains shoutout', t => {
  const page = shallow(index())
  t.is(page.find(Shout).length, 1)
  t.true(page.find(Shout).contains('Improving software delivery in every organisation'))
})

test('index contains gallery', t => {
  const page = shallow(index())
  t.is(page.find(Gallery).length, 1)
  t.true(page.find(Gallery).contains([
    <img src='/static/office/team.jpg' />,
    <img src='/static/office/laptop.jpg' />,
    <img src='/static/office/crows.jpg' />
  ]))
})
