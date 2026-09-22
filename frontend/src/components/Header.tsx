export default function Header() {
  return (
    <header className="border-b border-amber-100 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-xl text-amber-600">
            ◆
          </div>

          <div>
            <h1 className="font-serif text-2xl font-bold text-stone-800">
              Shwe Myanmar
            </h1>

            <p className="text-xs text-stone-500">Analyze • Learn • Preserve</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-3">
          <a
            href="#"
            className="rounded-full bg-amber-50 px-5 py-2 text-sm font-medium text-amber-800"
          >
            Text Analyzer
          </a>

          <a
            href="#"
            className="px-4 py-2 text-sm text-stone-600 hover:text-amber-700"
          >
            Dataset
          </a>

          <a
            href="#"
            className="px-4 py-2 text-sm text-stone-600 hover:text-amber-700"
          >
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
