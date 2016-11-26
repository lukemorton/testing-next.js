import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Shout from '../../components/Shout'
import index from '../../pages'

test('index contains shoutout', t => {
  const page = shallow(index())
  t.is(page.find(Shout).length, 1)
  t.true(page.find(Shout).contains('Improving software delivery in every organisation'))
})
