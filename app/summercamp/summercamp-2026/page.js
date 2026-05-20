"use client";

import { useEffect } from "react";

/** Old URL; static export–friendly redirect to the canonical `/summercamp` page. */
export default function SummerCamp2026LegacyRedirect() {
  useEffect(() => {
    window.location.replace("/summercamp");
  }, []);

  return (
    <div className="flex min-h-[30vh] items-center justify-center bg-white px-4">
      <p className="text-center text-gray-600">Redirecting to Summer Camp…</p>
    </div>
  );
}
