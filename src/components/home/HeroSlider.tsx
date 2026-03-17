"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { HERO_SLIDES, type HeroSlide } from "@/lib/homeContent";

function clampIndex(next: number, len: number) {
  if (len <= 0) return 0;
  return (next + len) % len;
}

function IconChevron({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12.5 4.5L7.5 10L12.5 15.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroSlider({
  slides,
  autoMs = 5500,
}: {
  slides?: HeroSlide[];
  autoMs?: number;
}) {
  const data = useMemo(() => slides ?? HERO_SLIDES, [slides]);
  const [index, setIndex] = useState(0);

  const goPrev = () => setIndex((i) => clampIndex(i - 1, data.length));
  const goNext = () => setIndex((i) => clampIndex(i + 1, data.length));

  useEffect(() => {
    if (data.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => clampIndex(i + 1, data.length));
    }, autoMs);
    return () => window.clearInterval(id);
  }, [autoMs, data.length]);

  const active = data[index] ?? data[0];

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-10">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-slate-950 via-slate-950 to-sky-950">
        <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(900px_circle_at_20%_20%,rgba(56,189,248,0.20),transparent_45%),radial-gradient(800px_circle_at_80%_40%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(700px_circle_at_40%_90%,rgba(14,165,233,0.14),transparent_55%)]" />

        {data.length > 1 ? (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={goPrev}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-slate-950/40 p-2 text-white/80 backdrop-blur hover:bg-white/10 hover:text-white"
            >
              <IconChevron className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={goNext}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-slate-950/40 p-2 text-white/80 backdrop-blur hover:bg-white/10 hover:text-white"
            >
              <IconChevron className="h-5 w-5 rotate-180" />
            </button>
          </>
        ) : null}

        <div className="relative grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12">
          <div className="flex flex-col justify-center gap-4">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-sky-200">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              {active.eyebrow}
            </div>
            <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
              {active.title}
            </h1>
            <p className="max-w-xl text-pretty text-base leading-7 text-white/70 md:text-lg">
              {active.description}
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <Link
                href={active.ctaHref}
                className="rounded-full bg-linear-to-r from-sky-400 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:brightness-110"
              >
                {active.ctaLabel}
              </Link>
              <Link
                href="/credit-score"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/10"
              >
                Check credit score
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold text-white">Quick actions</div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <Link
                  href="/loans"
                  className="rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 text-white/85 hover:bg-white/5"
                >
                  Compare loans
                </Link>
                <Link
                  href="/insurance"
                  className="rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 text-white/85 hover:bg-white/5"
                >
                  Compare insurance
                </Link>
                <Link
                  href="/contact-us"
                  className="rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 text-white/85 hover:bg-white/5"
                >
                  Talk to an expert
                </Link>
                <Link
                  href="/about-us"
                  className="rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 text-white/85 hover:bg-white/5"
                >
                  Why CapitalCare
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-xs font-medium text-white/70">
                Slide {Math.min(index + 1, data.length)} of {data.length}
              </div>
              <div className="flex items-center gap-2">
                {data.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={[
                      "h-2.5 w-2.5 rounded-full transition",
                      i === index ? "bg-sky-400" : "bg-white/20 hover:bg-white/35",
                    ].join(" ")}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

