import Link from "next/link";

export function Footer() {
  return (
    <footer className="mx-auto mt-16 w-full max-w-6xl px-4 pb-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="text-sm font-semibold text-white">CapitalCare</div>
            <div className="mt-1 text-sm text-white/60">
              Fintech experience blueprint — content placeholders for now.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/about-us" className="text-sm font-semibold text-white/75 hover:text-white">
              About
            </Link>
            <Link
              href="/contact-us"
              className="text-sm font-semibold text-white/75 hover:text-white"
            >
              Contact
            </Link>
            <Link
              href="/credit-score"
              className="text-sm font-semibold text-white/75 hover:text-white"
            >
              Credit score
            </Link>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-6 text-xs font-medium text-white/50">
          © {new Date().getFullYear()} CapitalCare. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

