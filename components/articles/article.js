import React from 'react'
import Link from 'next/link'

export default ({ title, href }) =>
  <Link href={href}>{title}</Link>
