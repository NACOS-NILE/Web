"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => { const timer = window.setTimeout(() => setHidden(true), 2900); return () => window.clearTimeout(timer); }, []);
  if (hidden) return null;
  return <div className="loading-screen" role="status" aria-label="Loading NACOS Nile"><div className="loader-lockup"><div className="loader-mark"><Image className="loader-logo loader-logo-base" src="/logo.svg" alt="" width={280} height={133} priority /><div className="loader-fill"><Image className="loader-logo" src="/logo.svg" alt="" width={280} height={133} priority /><span className="water-line"><i /><b /></span></div></div><div className="loader-meta"><span>NACOS NILE</span><span>EST. 2023</span></div><div className="loader-progress"><i /></div><p>Filling the next generation with possibility</p></div></div>;
}
