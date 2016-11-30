import test from 'ava'
import style from './style'
import { cssFor } from 'glamor'

test('when no min or max width provided', t => {
  const css = cssFor(style.whiter())
  t.is(css.indexOf('@media'), -1)
})

test('when min width provided', t => {
  const css = cssFor(style.whiter({ minWidth: '40em' }))
  t.true(css.indexOf('@media') > -1)
  t.true(css.indexOf('(min-width: 40em)') > -1)
})

test('when max width provided', t => {
  const css = cssFor(style.whiter({ maxWidth: '40em' }))
  t.true(css.indexOf('@media') > -1)
  t.true(css.indexOf('(max-width: 40em)') > -1)
})
