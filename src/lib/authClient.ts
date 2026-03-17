export const AUTH_FLAG_KEY = "capitalcare:signedIn";

export function getSignedIn(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(AUTH_FLAG_KEY) === "true";
  } catch {
    return false;
  }
}

export function setSignedIn(next: boolean) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(AUTH_FLAG_KEY, next ? "true" : "false");
    window.dispatchEvent(new Event("capitalcare:auth"));
  } catch {
    // ignore
  }
}

