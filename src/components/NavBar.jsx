import React from 'react'
import 'tailwindcss'

const NavBar = () => {
  return (
    <div className='flex'>
        NavBar
        <div className='flex flex-row gap-4 justify-end mr-4 text-lg font-semibold text-gray-700'> Home </div>
        <div className='flex flex-row gap-4 justify-end mr-4 text-lg font-semibold text-gray-700'>About </div>
        <div className='flex flex-row gap-4 justify-end mr-4 text-lg font-semibold text-gray-700'>Contact </div>
        <button className='flex flex-row gap-4 justify-end mr-4 text-lg font-semibold text-gray-700 border-2 border-gray-700 rounded-md px-2 py-1'>Login</button>
    </div>
  )
}

export default NavBar