import { memo } from 'react'
import Link from 'next/link'
import { UseDateFormat } from '~/src/hooks/Format'
import { Blog } from '~/src/types/blog'
import { Order } from '~/src/components/base/Body/components/Order'
import { TableOfContents } from '../TableOfContents'

type Props = {
  blog: Blog
}

export const Body = memo(({ blog }: Props) => {
  const { dateFormat } = UseDateFormat(blog.createdAt)

  return (
    <article className="px-10">
      <Order blog={blog} />
      <div>
        <Link href={`/category/${blog.category[0].name.toLowerCase()}`}>
          <a className="text-sm text-white items-center mr-4 bg-gray-400 px-2 py-0.5 rounded-md cursor-pointer hover:bg-gray-500">
            {blog.category[0].name}
          </a>
        </Link>
      </div>
      <div className="mb-4">投稿日:{dateFormat}</div>
      <div>
        <h1 className="text-4xl flex">{blog.title}</h1>
      </div>
      <TableOfContents blog={blog} mode="BODY" />
      <div dangerouslySetInnerHTML={{ __html: blog.body }} />
    </article>
  )
})

Body.displayName = 'Body'
