import Image from 'next/image'
import { memo } from 'react'

export const ProfileCard = memo(() => {
  return (
    <div className="border-solid rounded-lg border border-gray-400 p-4 mb-2">
      <div>
        <div className="bg-black"></div>
      </div>
      <div className="flex justify-center">
        <Image src="/drew.svg" alt="logo" width={100} height={100} />
      </div>
      <h2 className="flex justify-center text-base">nishitin</h2>
      <p className="flex justify-center text-xs">筋トレ大好きエンジニア</p>
      <div className="mt-2">
        <p className="text-base">◇このブログについて</p>
        <p className="text-base mb-2">日頃のアウトプット</p>
        <p className="text-base">◇スキル</p>
        <p className="text-base mb-2">React/TypeScript/Ruby</p>
        <p className="text-base">◇BIG3</p>
        <p className="text-base">ベンチプレス: 105kg</p>
        <p className="text-base">スクワット: 150kg</p>
        <p className="text-base">デットリフト: 170kg</p>
      </div>
    </div>
  )
})

ProfileCard.displayName = 'ProfileCard'
