"use client";

import { useEffect, useState } from "react";
import { getSignedIn, setSignedIn } from "@/lib/authClient";

export function useAuth() {
  const [signedIn, setSignedInState] = useState(false);

  useEffect(() => {
    const sync = () => setSignedInState(getSignedIn());
    sync();

    const onStorage = (e: StorageEvent) => {
      if (e.key) sync();
    };

    window.addEventListener("storage", onStorage);
    window.addEventListener("capitalcare:auth", sync);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("capitalcare:auth", sync);
    };
  }, []);

  return {
    signedIn,
    signIn: () => setSignedIn(true),
    signOut: () => setSignedIn(false),
  };
}

