import React from 'react'
import { Blog } from '~/src/types/blog'
import Link from 'next/link'

type Props = {
  blog: Blog
}

export const Order = ({ blog }: Props) => {
  return (
    <ul className="flex mb-4">
      <li className="mr-2">
        <Link href="/">
          <a className="text-blue-500">nishitinBlog ＞</a>
        </Link>
      </li>
      <li className="mr-2">
        <Link href={`/category/${blog.category.name.toLowerCase()}`}>
          {/* TODO: この場合この場合カテゴリーがたくさん含まれているとダメになるから修正 */}
          <a>{blog.category.name} ＞</a>
        </Link>
      </li>
      <li>
        <a>{blog.title}</a>
      </li>
    </ul>
  )
}
