interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto flex flex-col space-y-4">
      <header className="container sticky top-0 z-40 bg-white">
        <div className="h-16 border-b border-b-slate-200 py-4">
          <nav className="ml-4 pl-6 align-middle text-align-center">
            <span className="pl-6 space-x-4">
              <a href="/" className="text-2xl hover:text-slate-600 cursor-pointer">
                  Home
              </a>
            </span>
            <span className="pl-6 space-x-4">
              <a href="/laws" className="text-2xl hover:text-slate-600 cursor-pointer">
                  Laws
              </a>
            </span>
            <span className="pl-6 space-x-4">    
              <a href="/decisions" className="text-2xl hover:text-slate-600 cursor-pointer">
                  Decisions
              </a>
            </span>
            <span className="pl-6 space-x-4">    
              <a href="/dictionary" className="text-2xl hover:text-slate-600 cursor-pointer">
                  Dictionary
              </a>
             </span>
            <span className="pl-6 space-x-4">    
              <a href="/lawyers" className="text-2xl hover:text-slate-600 cursor-pointer">
                  Lawyers
              </a>
            </span>
            <span className="pl-6 space-x-4">    
              <a href="/chat" className="text-2xl hover:text-slate-600 cursor-pointer">
                  Chat
              </a>
            </span>
          </nav>
        </div>
      </header>
      <div>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
