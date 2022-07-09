import Link from 'next/link'
import React from 'react'
import { memo } from 'react'
import { UseDateFormat } from '~/src/hooks/Format'
import { Blog } from '~/src/types/blog'

type Props = {
  blogs: Blog[]
}

export const Card = memo(({ blogs }: Props) => {
  if (blogs.length === 0) {
    return <h1 className="w-3/5">データがありません</h1>
  }
  const data = blogs.map((b) => {
    return b.createdAt as string
  })
  const { dateFormat } = UseDateFormat(data.toString())

  return (
    <>
      {blogs?.map((blog) => {
        return (
          <div key={blog.id} className="flex w-11/12 mt-4">
            <div className="h-32 lg:w-32 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-black"></div>
            <div className="h-32 w-full border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-2.5 flex flex-col justify-between leading-normal">
              <div className="w-max">
                <div className="flex">
                  <p className="text-sm text-white items-center mr-4 bg-gray-400 px-2 py-0.5 rounded-md cursor-pointer hover:bg-gray-500">
                    {blog.category.name}
                  </p>
                </div>
                <Link href={`/blog/${blog.id}`}>
                  <a className="text-gray-900 font-bold text-xl my-2 break-words">{blog.title}</a>
                </Link>
                <p className="text-gray-700 text-base"></p>
              </div>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="text-gray-600">記事作成日: {dateFormat}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
})

Card.displayName = 'Card'
