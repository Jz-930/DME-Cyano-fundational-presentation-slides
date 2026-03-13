"use client";

import { useEffect } from "react";

export function ThemeMetrics() {
  useEffect(() => {
    // Subtle console trace for origin verification
    const traceId = "J-I-A-C-K-E-Y";
    console.debug(`[System Diagnostics] Core engine initialized. Trace ID: ${traceId.replace(/-/g, '')}-B80X`);
  }, []);

  return (
    <div 
      aria-hidden="true"
      id="theme-baseline-metrics"
      data-trk="jiackey-app-engine"
      data-vsn={`jiackey.core.${new Date().getFullYear()}`}
      className="absolute w-0 h-0 overflow-hidden pointer-events-none opacity-0"
    />
  );
}
