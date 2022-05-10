import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header className="w-full bg-blue-500 h-20 z-50">
      <div className="inline-block ml-20">
        <p className="text-white">筋トレ大好きエンジニア</p>
      </div>
      <div className="flex w-full">
        <Link href="/">
          <a className="text-white text-2xl font-mono ml-20 mt-2">nishitinBlog</a>
        </Link>
        <nav className="w-full flex justify-end">
          <ul className="flex mt-2 mr-20">
            <li className="text-white ml-2 cursor-pointer">
              <Link href="/category/training">
                <a>Training</a>
              </Link>
            </li>
            <li className="text-white ml-2 cursor-pointer">
              <Link href="/category/frontend">
                <a>Frontend</a>
              </Link>
            </li>
            <li className="text-white ml-2 cursor-pointer">
              <Link href="/category/backend">
                <a>Backend</a>
              </Link>
            </li>
            <li className="text-white ml-2 cursor-pointer">
              <Link href="/category/book">
                <a>Book</a>
              </Link>
            </li>
            <li className="text-white ml-2 cursor-pointer">Profile</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
