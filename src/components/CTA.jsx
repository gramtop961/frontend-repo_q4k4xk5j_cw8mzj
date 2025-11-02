export default function CTA() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-sky-100 via-white to-violet-100 p-10 ring-1 ring-slate-200">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Ready to modernize your payments?</h3>
          <p className="mt-3 text-slate-600">
            Join thousands of teams using FluxPay for simple, secure, and scalable financial operations.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800">Create account</button>
            <button className="rounded-md bg-white px-6 py-3 text-sm font-medium text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50">Talk to sales</button>
          </div>
          <p className="mt-4 text-xs text-slate-500">Bank‑level security • 99.9% uptime • 24/7 support</p>
        </div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <div className="text-sm text-slate-500">© {new Date().getFullYear()} FluxPay Inc.</div>
          <div className="flex gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#" className="hover:text-slate-700">Status</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
