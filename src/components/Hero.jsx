import React from 'react'

const Hero = () => {
  return (
    <div className='w-screen bg-[#0a0c10] text-white font-sans selection:bg-blue-500/30'>
        <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
            <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rotate-12 rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 bg-[#0a0c10] -rotate-12"></div>
            </div>
            <span className="text-2xl font-bold tracking-tight">Pixel&Logic</span>
    </div>

    <div>
        <a href="#" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-gray-500">Home</a>
        <a href="#" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-gray-500">About</a>
        <a href="#" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-gray-500">Contact</a>
        {/* <button className="ml-4 px-4 py-2 text-sm font-medium text-gray-300 border border-gray-300 rounded-md hover:text-gray-500">Login</button> */}
    </div>
    
        <button className="border border-gray-700 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2">
            Hire Me <span className="text-xs">»</span>
        </button>
    </nav>

    <main className='mx-auto max-w-7xl px-8 pt-20 grid items-center relative'>
        <div>
            <h2 className='text-2xl font-medium text-gray-300'>Hello! I'm</h2>
            <h1 className='text-6xl font-bold tracking-tight mt-2'>Nihal</h1>
            <p className='mx-auto mt-4 text-lg text-gray-300 max-w-xl'>I'm a passionate frontend developer specialized in React and modern web technologies.</p>
        </div>

        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-tr from-blue-500 to-purple-600 opacity-30 blur-3xl'> </div>
            {/* <div className='h-100 w-100 [mask-image' */}
            <img src="./src/assets/portrait.jpg" alt="Profile Pic" className='max-w-2/4 mx-auto relative m-10 z-10 hover:scale-110 transition-all duration-700' />
    </main>
</div>
  )
}

export default Hero