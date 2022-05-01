import React, { memo } from 'react'
import { Category } from '~/src/types/category'

type Props = {
  category: Category[]
}

export const CategoryCard = memo(({ category }: Props) => {
  return (
    <div className="border-solid border-2 border-gray-400 p-8">
      <div>
        <span>カテゴリー</span>
        {category.map((c) => {
          return <div key={c.id}>{c.name}</div>
        })}
      </div>
    </div>
  )
})

CategoryCard.displayName = 'CateGoryCard'
