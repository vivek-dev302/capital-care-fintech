import Link from "next/link";
import { IN_DEMAND_LOANS } from "@/lib/homeContent";

export function InDemandLoans() {
  return (
    <section id="in-demand-loans" className="mx-auto w-full max-w-6xl px-4 pt-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-sky-200/80">
            In-demand loans
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Popular picks right now
          </h2>
        </div>
        <Link href="/loans" className="text-sm font-semibold text-sky-300 hover:text-sky-200">
          View all
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {IN_DEMAND_LOANS.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/7"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(300px_circle_at_50%_40%,rgba(56,189,248,0.22),transparent_60%)]" />
            <div className="relative">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-semibold text-white">{card.title}</div>
                <div className="rounded-full border border-white/10 bg-slate-950/40 px-2.5 py-1 text-[11px] font-semibold text-white/70">
                  Loans
                </div>
              </div>
              <div className="mt-2 text-sm text-white/65">{card.subtitle}</div>
              <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-sky-300/90">
                Explore →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

