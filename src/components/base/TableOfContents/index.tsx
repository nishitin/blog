import { memo } from 'react'
import { Blog } from '~/src/types/blog'
import * as cheerio from 'cheerio'

type Props = {
  blog: Blog
}

export const TableOfContents = memo(({ blog }: Props) => {
  if (blog === null) {
    return null
  }

  const $ = cheerio.load(blog.body)
  console.log($)
  const headings = $('h1').toArray()
  console.log(headings)
  const toc = headings.map((data: cheerio.AnyNode | any) => ({
    text: data.children[0].data,
    id: data.attribs.id,
    name: data.name,
  }))

  // これぞ型ガード
  return (
    <div className="border-solid border-2 border-gray-400 mt-2">
      {toc.map((t: any) => {
        return (
          <div key={t.id}>
            <ul className="flex justify-center">
              <li>
                <a className="text-xl underline cursor-pointer">{t.text}</a>
              </li>
            </ul>
          </div>
        )
      })}
    </div>
  )
})

TableOfContents.displayName = 'TableOfContents'
