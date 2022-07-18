import { memo } from 'react'

export const Footer = memo(() => {
  return (
    <footer className="w-full h-11 bottom-0 fixed bg-gray-400">
      <div className="h-full">
        <p className="h-full flex justify-center align-middle items-center text-white text-xs">
          ©︎ 2022 nishitinBlog
        </p>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'
