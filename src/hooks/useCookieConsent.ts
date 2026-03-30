import { useState, useEffect, useCallback } from "react";

const CONSENT_KEY = "tekinfra_cookie_consent";

export type ConsentStatus = "granted" | "denied" | "pending";

export function getConsentStatus(): ConsentStatus {
  const val = localStorage.getItem(CONSENT_KEY);
  if (val === "granted") return "granted";
  if (val === "denied") return "denied";
  return "pending";
}

export function useCookieConsent() {
  const [status, setStatus] = useState<ConsentStatus>(getConsentStatus);

  const accept = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "granted");
    setStatus("granted");
  }, []);

  const deny = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "denied");
    setStatus("denied");
  }, []);

  // Load retargeting script when consent is granted
  useEffect(() => {
    if (status !== "granted") return;
    if (document.getElementById("seznam-rc-script")) return;

    const script = document.createElement("script");
    script.id = "seznam-rc-script";
    script.src = "https://c.seznam.cz/js/rc.js";
    script.onload = () => {
      try {
        (window as any).sznIVA?.IS?.updateIdentities({ eid: null });
        (window as any).rc?.retargetingHit({
          rtgId: 1679913,
          consent: 1,
        });
      } catch (e) {
        console.warn("Seznam retargeting error:", e);
      }
    };
    document.head.appendChild(script);
  }, [status]);

  return { status, accept, deny };
}

/** Fire Seznam conversion hit (call after successful form submission) */
export function fireSeznamConversion() {
  if (getConsentStatus() !== "granted") return;
  try {
    (window as any).sznIVA?.IS?.updateIdentities({ eid: null });
    (window as any).rc?.conversionHit({
      id: 100272024,
      value: null,
      consent: 1,
    });
  } catch (e) {
    console.warn("Seznam conversion error:", e);
  }
}
