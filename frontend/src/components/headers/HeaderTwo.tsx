const HeaderTwo = () => {
  return (
    <header className="w-full border-b border-zinc-200 px-8 py-4">
      <div className="flex flex-col items-center gap-3">
        <span className="text-zinc-900 font-black text-2xl tracking-widest uppercase">Studio</span>
        <nav className="flex gap-8 text-xs text-zinc-500 uppercase tracking-widest">
          <a href="#" className="hover:text-zinc-900 border-b border-transparent hover:border-zinc-900 pb-0.5 transition-all">Work</a>
          <a href="#" className="hover:text-zinc-900 border-b border-transparent hover:border-zinc-900 pb-0.5 transition-all">About</a>
          <a href="#" className="hover:text-zinc-900 border-b border-transparent hover:border-zinc-900 pb-0.5 transition-all">Services</a>
          <a href="#" className="hover:text-zinc-900 border-b border-transparent hover:border-zinc-900 pb-0.5 transition-all">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default HeaderTwo