import React from 'react'
import { Blog } from '~/src/types/blog'
import Link from 'next/link'

type Props = {
  blog: Blog
}

export const Order = ({ blog }: Props) => {
  return (
    <ul className="flex">
      <li className="mr-2">
        <Link href="/">
          <a>nishitinBlog ＞</a>
        </Link>
      </li>
      <li className="mr-2">
        <Link href={`/category/${blog.category.name.toLowerCase()}`}>
          <a>{blog.category.name} ＞</a>
        </Link>
      </li>
      <li>
        <a>{blog.title}</a>
      </li>
    </ul>
  )
}
