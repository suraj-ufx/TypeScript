const HeaderThree = () => {
  return (
    <header className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center">
          <div className="w-3 h-3 bg-violet-600 rounded-sm" />
        </div>
        <span className="text-white font-bold text-lg">Bloom</span>
      </div>
      <nav className="flex gap-1">
        {["Home", "Features", "Pricing", "Blog"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-sm text-white/80 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-full transition-all"
          >
            {item}
          </a>
        ))}
      </nav>
      <div className="flex gap-2">
        <button className="text-sm text-white/80 hover:text-white px-3 py-1.5 transition-colors">
          Login
        </button>
        <button className="text-sm bg-white text-violet-700 font-semibold px-4 py-1.5 rounded-full hover:bg-violet-50 transition-colors">
          Sign Up
        </button>
      </div>
    </header>
  )
}

export default HeaderThree