import { memo } from 'react'

export const ProfileCard = memo(() => {
  return (
    <div className="border-solid border-2 border-gray-400 p-8">
      <div>
        <div className="bg-black"></div>
      </div>
      <div>
        <h2 className="">nishitin</h2>
        <p>筋トレ大好きエンジニア</p>
        <div>
          <p>◇このブログについて</p>
          <p>筋トレ大好きエンジニアのブログ。トレーニングの知識・技術の事・読んだ書籍について触れていく</p>
          <p>◇BIG3の重量</p>
          <p>ベンチ 105kg デットリフト 170kg スクワット 150kg</p>
        </div>
      </div>
    </div>
  )
})

ProfileCard.displayName = 'ProfileCard'
