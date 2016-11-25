import test from 'ava'
import { shallow } from 'enzyme'
import index from '../pages'

test('page contains hello world', t => {
  const page = shallow(index())
  t.true(page.contains('Hello world!'))
})
