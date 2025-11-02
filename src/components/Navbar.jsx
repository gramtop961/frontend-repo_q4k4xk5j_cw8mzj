import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-sky-400 to-violet-500" />
          <span className="font-semibold text-slate-900 dark:text-white">FluxPay</span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-slate-600 hover:text-slate-900">Features</a>
          <a href="#pricing" className="text-sm text-slate-600 hover:text-slate-900">Pricing</a>
          <a href="#security" className="text-sm text-slate-600 hover:text-slate-900">Security</a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-md px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">Sign in</button>
          <button className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">Get started</button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="mx-4 rounded-xl border border-slate-200 bg-white/70 p-4 backdrop-blur md:hidden">
          <div className="flex flex-col gap-3">
            <a href="#features" className="text-sm text-slate-700">Features</a>
            <a href="#pricing" className="text-sm text-slate-700">Pricing</a>
            <a href="#security" className="text-sm text-slate-700">Security</a>
            <div className="mt-2 flex gap-2">
              <button className="flex-1 rounded-md px-4 py-2 text-sm font-medium text-slate-700">Sign in</button>
              <button className="flex-1 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white">Get started</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
