import React from 'react'

const HeaderOne = () => {
  return (
     <header className="w-full bg-zinc-950 px-8 py-4 flex justify-between items-center">
      <span className="text-white font-bold text-xl tracking-tight">ACME</span>
      <nav className="flex gap-6 text-sm text-zinc-400">
        <a href="#" className="hover:text-white transition-colors">Home</a>
        <a href="#" className="hover:text-white transition-colors">About</a>
        <a href="#" className="hover:text-white transition-colors">Work</a>
        <a href="#" className="hover:text-white transition-colors">Contact</a>
      </nav>
      <button className="bg-white text-zinc-950 text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-zinc-200 transition-colors">
        Get Started
      </button>
    </header>
  )
}

export default HeaderOne