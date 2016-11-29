import test from 'ava'
import style from './style'

test('when no min or max width provided', t => {
  t.truthy(style.whiter().color)
  t.truthy(style.whiter().textShadow)
})

test('when min width provided', t => {
  t.truthy(style.whiter({ minWidth: '40em' })['@media (min-width: 40em)'])
})

test('when max width provided', t => {
  t.truthy(style.whiter({ maxWidth: '40em' })['@media (max-width: 40em)'])
})
