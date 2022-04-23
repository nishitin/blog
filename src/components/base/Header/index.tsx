import React from 'react'

export const Header = () => {
  return (
    <header className="w-full bg-blue-500 h-20 z-50">
      <div className="inline-block ml-20">
        <p className="text-white">筋トレ大好きエンジニア</p>
      </div>
      <div className="flex w-full">
        <h1 className="text-white text-2xl font-mono ml-20 mt-2">nishitinBlog</h1>
        <nav className="w-full flex justify-end">
          <ul className="flex mt-2 mr-20">
            <li className="text-white ml-2 cursor-pointer">Training</li>
            <li className="text-white ml-2 cursor-pointer">Frontend</li>
            <li className="text-white ml-2 cursor-pointer">Backend</li>
            <li className="text-white ml-2 cursor-pointer">Book</li>
            <li className="text-white ml-2 cursor-pointer">Profile</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
