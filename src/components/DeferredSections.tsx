"use client";

import dynamic from "next/dynamic";
import { useState, useEffect, useRef, type ReactNode } from "react";

const DisciplineExperience = dynamic(
  () => import("@/components/DisciplineExperience").then((m) => m.DisciplineExperience),
  { ssr: false }
);

const LifeAtNacos = dynamic(
  () => import("@/components/LifeAtNacos").then((m) => m.LifeAtNacos),
  { ssr: false }
);

const ExecutiveGrid = dynamic(
  () => import("@/components/ExecutiveGrid").then((m) => m.ExecutiveGrid),
  { ssr: false }
);

const Dues = dynamic(
  () => import("@/components/Dues").then((m) => m.Dues),
  { ssr: false }
);

function LazySection({
  children,
  targetId,
  minHeight = "350px",
}: {
  children: ReactNode;
  targetId?: string;
  minHeight?: string;
}) {
  const [inView, setInView] = useState(() => {
    if (typeof window !== "undefined" && targetId && window.location.hash === `#${targetId}`) {
      return true;
    }
    return false;
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );
    observer.observe(el);

    const onHash = () => {
      if (targetId && window.location.hash === `#${targetId}`) {
        setInView(true);
      }
    };
    window.addEventListener("hashchange", onHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", onHash);
    };
  }, [targetId, inView]);

  return (
    <div ref={ref} style={{ minHeight: inView ? undefined : minHeight }}>
      {inView ? children : null}
    </div>
  );
}

export function DeferredDiscipline() {
  return (
    <LazySection targetId="disciplines" minHeight="450px">
      <DisciplineExperience />
    </LazySection>
  );
}

export function DeferredLife() {
  return (
    <LazySection targetId="life" minHeight="400px">
      <LifeAtNacos />
    </LazySection>
  );
}

export function DeferredExecutives() {
  return (
    <LazySection targetId="team" minHeight="500px">
      <ExecutiveGrid />
    </LazySection>
  );
}

export function DeferredDues() {
  return (
    <LazySection targetId="dues" minHeight="500px">
      <Dues />
    </LazySection>
  );
}
