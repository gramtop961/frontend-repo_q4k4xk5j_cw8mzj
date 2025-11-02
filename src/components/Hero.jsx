import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full" style={{ minHeight: '90vh' }}>
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
          Modern payments for ambitious teams
        </h1>
        <p className="mt-5 max-w-2xl text-base text-slate-600 sm:text-lg">
          Accept cards globally, automate payouts, and grow revenue with a minimalist fintech platform that scales with you.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <button className="rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-slate-900/10 hover:bg-slate-800">
            Start free trial
          </button>
          <button className="rounded-md bg-white/80 px-6 py-3 text-sm font-medium text-slate-900 ring-1 ring-slate-200 backdrop-blur hover:bg-white">
            View docs
          </button>
        </div>
        <p className="mt-4 text-xs text-slate-500">No credit card required • 14-day free trial</p>
      </div>
    </section>
  );
}
