import { CreditCard, BarChart2, Shield, Rocket } from 'lucide-react';

const features = [
  {
    icon: CreditCard,
    title: 'Global Card Acceptance',
    desc: 'Process Visa and major cards in 135+ currencies with built‑in 3D Secure.',
  },
  {
    icon: BarChart2,
    title: 'Real‑time Analytics',
    desc: 'Monitor conversions, revenue, and failed payments in one simple dashboard.',
  },
  {
    icon: Shield,
    title: 'Bank‑grade Security',
    desc: 'Tokenization and PCI compliance handled end‑to‑end with anomaly detection.',
  },
  {
    icon: Rocket,
    title: 'Fast Payouts',
    desc: 'Automate settlements to your bank with smart scheduling and controls.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Everything you need to grow</h2>
        <p className="mt-3 text-slate-600">A focused toolset to launch faster and operate with confidence.</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-violet-500 text-white">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
