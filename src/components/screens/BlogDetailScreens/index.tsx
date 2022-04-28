import React from 'react'
import { Blog } from '~/src/types/blog'

type Props = {
  blog: Blog
}

export const BlogDetailScreen = ({ blog }: Props) => {
  return (
    <div>
      <div key={blog.id}>
        <h1>{blog.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
      </div>
      <h1></h1>
    </div>
  )
}
