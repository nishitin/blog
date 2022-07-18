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
    ASIDE: 'border-solid rounded-lg border border-gray-400',
    BODY: 'w-9/12 bg-gray-200 mb-10 border-solid rounded',
  }

  const tocTextStyle = {
    ASIDE: 'flex mb-2',
    BODY: 'flex',
  }

  const tocTitleStyle = {
    ASIDE: 'flex font-bold text-xl',
    BODY: 'flex font-bold text-xl',
  }

  const $ = cheerio.load(blog.body)
  const headings = $('h1, h2, h3').toArray()
  const toc = headings.map((data: cheerio.AnyNode | any) => ({
    text: data.children[0].data as string,
    id: data.attribs.id as string,
    name: data.name as string,
  }))

  return (
    <div className={`${tocStyle[mode]}`}>
      {mode === 'BODY' ? <div className="h-2 bg-blue-400"></div> : ''}
      <div className="p-5">
        <p className={`${tocTitleStyle[mode]}`}>目次</p>
        {toc.map((t: any) => {
          return (
            <ul className={`${tocTextStyle[mode]}`} key={t.id}>
              <li>
                <a className={t.name === 'h1' ? 'text-xl' : t.name === 'h2' ? 'text-lg' : 'text-base'}>
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
