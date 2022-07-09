import { memo } from 'react'
import { Blog } from '~/src/types/blog'
import * as cheerio from 'cheerio'

type Props = {
  blog: Blog
  mode: 'ASIDE' | 'BODY'
}

export const TableOfContents = memo(({ blog, mode }: Props) => {
  if (blog === null) {
    return null
  }

  const tocStyle = {
    ASIDE: 'border-solid',
    BODY: 'w-9/12 bg-gray-200 mb-10 border-solid',
  }

  const tocTextStyle = {
    ASIDE: 'flex justify-center',
    BODY: 'flex',
  }

  const $ = cheerio.load(blog.body)
  const headings = $('h1, h2, h3').toArray()
  const toc = headings.map((data: cheerio.AnyNode | any) => ({
    text: data.children[0].data,
    id: data.attribs.id,
    name: data.name,
  }))

  return (
    <div className={`${tocStyle[mode]}`}>
      {mode === 'BODY' ? <div className="h-2 bg-blue-400"></div> : ''}
      <p className="flex justify-center font-bold">目次</p>
      <div className="p-2">
        {toc.map((t: any) => {
          return (
            <ul className={`${tocTextStyle[mode]}`} key={t.id}>
              <li className="font-medium">
                <a className={t.name === 'h1' ? 'text-2xl' : t.name === 'h2' ? 'text-xl' : 'text-base'}>
                  {t.text}
                </a>
              </li>
            </ul>
          )
        })}
      </div>
    </div>
  )
})

TableOfContents.displayName = 'TableOfContents'
