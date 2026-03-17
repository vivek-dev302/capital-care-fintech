"use client";

import { setSignedIn } from "@/lib/authClient";

export default function SignUpPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pt-10">
      <button
        type="button"
        onClick={() => setSignedIn(true)}
        className="rounded-full bg-linear-to-r from-sky-400 to-indigo-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:brightness-110"
      >
        Mock sign up
      </button>
    </div>
  );
}

