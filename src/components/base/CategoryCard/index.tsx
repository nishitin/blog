import Link from 'next/link'
import React, { memo } from 'react'
import { Category } from '~/src/types/category'

type Props = {
  category: Category[]
}

export const CategoryCard = memo(({ category }: Props) => {
  return (
    <div className="border-solid border-2 border-gray-400 p-8 mt-2">
      <div>
        <span className="w-full bg-gray-400 px-2 py-0.5 rounded-md flex mb-2">カテゴリー</span>
        {category.map((c) => {
          return (
            <Link key={c.id} href={`/category/${c.id}`}>
              <a className="border-b px-2 border-gray-300 mb-2 cursor-pointer flex">{c.name}</a>
            </Link>
          )
        })}
      </div>
    </div>
  )
})

CategoryCard.displayName = 'CateGoryCard'
