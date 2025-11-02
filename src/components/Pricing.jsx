export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Simple, transparent pricing</h2>
        <p className="mt-3 text-slate-600">Only pay for what you use. No setup fees, no surprises.</p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <Plan
          name="Starter"
          price="0"
          unit="/mo"
          cta="Get started"
          highlights={["Up to 1k transactions", "Standard support", "Basic analytics"]}
        />
        <Plan
          featured
          name="Growth"
          price="49"
          unit="/mo"
          cta="Start trial"
          highlights={["Up to 50k transactions", "Priority support", "Advanced analytics", "Custom webhooks"]}
        />
        <Plan
          name="Scale"
          price="Custom"
          unit=""
          cta="Contact sales"
          highlights={["Unlimited volumes", "Dedicated manager", "SLA & compliance", "On‑prem options"]}
        />
      </div>

      <p className="mt-6 text-center text-xs text-slate-500">Interchange and network fees apply for card transactions.</p>
    </section>
  );
}

function Plan({ name, price, unit, cta, highlights, featured = false }) {
  return (
    <div
      className={
        "relative flex flex-col rounded-2xl border p-6 " +
        (featured
          ? "border-slate-900 bg-slate-900 text-white shadow-xl"
          : "border-slate-200 bg-white shadow-sm")
      }
    >
      {featured && (
        <span className="absolute right-4 top-4 rounded-full bg-white/10 px-2 py-1 text-xs">Popular</span>
      )}
      <h3 className={featured ? "text-white" : "text-slate-900" + " text-lg font-semibold"}>{name}</h3>
      <div className="mt-2 flex items-end gap-1">
        <span className="text-4xl font-bold">{price === "Custom" ? price : `$${price}`}</span>
        <span className={featured ? "text-white/80" : "text-slate-500"}>{unit}</span>
      </div>
      <ul className="mt-6 space-y-2 text-sm">
        {highlights.map((h) => (
          <li key={h} className={featured ? "text-white/90" : "text-slate-600"}>
            • {h}
          </li>
        ))}
      </ul>
      <button
        className={
          "mt-6 w-full rounded-md px-4 py-2 text-sm font-medium " +
          (featured
            ? "bg-white text-slate-900 hover:bg-white/90"
            : "bg-slate-900 text-white hover:bg-slate-800")
        }
      >
        {cta}
      </button>
    </div>
  );
}
