import { memo } from 'react'

export const ProfileCard = memo(() => {
  return (
    <div className="border-solid rounded-lg border border-gray-400 p-4 mb-2">
      <div>
        <div className="bg-black"></div>
      </div>
      <div>
        <h2 className="flex justify-center">nishitin</h2>
        <p className="flex justify-center">筋トレ大好きエンジニア</p>
        <div className="mt-2">
          <p className="text-xs">◇このブログについて</p>
          <p className="text-xs mb-2">筋トレ大好きエンジニアのブログ</p>
        </div>
      </div>
    </div>
  )
})

ProfileCard.displayName = 'ProfileCard'
