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
          <p className="mb-2 text-xs">◇このブログについて</p>
          <p>筋トレ大好きエンジニアのブログ</p>
          <p>◇BIG3の重量</p>
          <p>ベンチ 105kg デットリフト 170kg スクワット 150kg</p>
        </div>
      </div>
    </div>
  )
})

ProfileCard.displayName = 'ProfileCard'
