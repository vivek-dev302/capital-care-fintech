import { REVIEWS } from "@/lib/homeContent";

export function Reviews() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-16">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Reviews
        </h2>
        <div className="hidden text-sm font-medium text-white/60 md:block">
          Built to feel simple, secure, and transparent.
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {REVIEWS.map((r) => (
          <figure
            key={r.name}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <blockquote className="text-sm leading-7 text-white/75">
              “{r.quote}”
            </blockquote>
            <figcaption className="mt-5">
              <div className="text-sm font-semibold text-white">{r.name}</div>
              <div className="text-xs font-medium text-white/60">{r.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

