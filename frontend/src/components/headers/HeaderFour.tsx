const HeaderFour = () => {
  return (
    <header className="w-full border-b border-zinc-100 px-8 py-3 flex justify-between items-center bg-amber-50">
      <div className="flex items-center gap-8">
        <span className="text-zinc-900 font-black text-xl italic">Folio.</span>
        <nav className="flex gap-6 text-sm text-zinc-600">
          <a href="#" className="hover:text-zinc-900 transition-colors">Projects</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Lab</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Writing</a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xs text-zinc-400 uppercase tracking-widest">Available for work</span>
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <button className="text-sm border border-zinc-900 text-zinc-900 px-4 py-1.5 rounded hover:bg-zinc-900 hover:text-white transition-all">
          Hire Me
        </button>
      </div>
    </header>
  )
}

export default HeaderFour