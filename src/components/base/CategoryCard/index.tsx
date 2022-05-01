import React, { memo } from 'react'
import { Category } from '~/src/types/category'

type Props = {
  category: Category[]
}

export const CategoryCard = memo(({ category }: Props) => {
  return (
    <div className="border-solid border-2 border-gray-400 p-8">
      <div>
        <span className="w-full bg-gray-400 px-2 py-0.5 rounded-md flex mb-2">カテゴリー</span>
        {category.map((c) => {
          return (
            <p key={c.id} className="border-b px-2 border-gray-300 mb-2 cursor-pointer ">
              {c.name}
            </p>
          )
        })}
      </div>
    </div>
  )
})

CategoryCard.displayName = 'CateGoryCard'
