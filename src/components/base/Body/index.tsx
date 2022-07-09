import { memo } from 'react'
import Link from 'next/link'
import { UseDateFormat } from '~/src/hooks/Format'
import { Blog } from '~/src/types/blog'
import * as cheerio from 'cheerio'
import { Order } from '~/src/components/base/Body/components/Order'
import { TableOfContents } from '../TableOfContents'
// import cheerio from 'cheerio'
// es6　or typescriptではこれじゃダメ??

type Props = {
  blog: Blog
}

export const Body = memo(({ blog }: Props) => {
  const { dateFormat } = UseDateFormat(blog.createdAt)

  const $ = cheerio.load(blog.body)
  const headings = $('p').toArray()
  const textParser = headings.map((data: cheerio.AnyNode | any) => ({
    text: data.children[0].data,
    id: data.attribs.id,
  }))

  const text = textParser.map((t) => {
    return t.text
  })
  // const TableOfContents = blog.b

  return (
    <article className="px-10">
      <Order blog={blog} />
      <div>
        <Link href={`/category/${blog.category.name.toLowerCase()}`}>
          <a className="text-sm text-white items-center mr-4 bg-gray-400 px-2 py-0.5 rounded-md cursor-pointer hover:bg-gray-500">
            {blog.category.name}
          </a>
        </Link>
      </div>
      <div>投稿日:{dateFormat}</div>
      <div>
        <h1 className="text-4xl flex justify-center">{blog.title}</h1>
      </div>
      <TableOfContents blog={blog} mode="BODY" />
      <div dangerouslySetInnerHTML={{ __html: blog.body }} />
    </article>
  )
})

Body.displayName = 'Body'
