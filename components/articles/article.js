import React from 'react'
import Link from 'next/link'

export default ({ title, href }) =>
  <li>
    <Link href={href}>{title}</Link>
  </li>
