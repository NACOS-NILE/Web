"use client";

import { useEffect, useRef, useState } from "react";

const codes = ["CS", "SE", "CY", "IT", "IS", "DS"] as const;
const yaws = [-12, -7, -15, -9, -13, -6];

function Editor() {
  return <div className="laptop-editor"><div className="laptop-lines"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span></div><pre><span className="screen-muted"># shortest path through campus</span>{"\n"}<span className="screen-blue">from</span> collections <span className="screen-blue">import</span> deque{"\n\n"}<span className="screen-blue">def</span> <span className="screen-cyan">solve</span>(graph, start):{"\n"}  queue = deque([start]){"\n"}  <span className="screen-blue">return</span> explore(queue)</pre></div>;
}

function Pipeline() {
  return <div className="laptop-pipeline"><div className="screen-toolbar"><b>main</b><span>a1f9c04</span></div>{["Install dependencies", "Type-check & lint", "Run tests", "Build release"].map((label, index) => <div className="pipeline-step" key={label}><i data-state={index < 3 ? "done" : "running"} /><span>{label}</span><em>{index < 3 ? "passed" : "building"}</em></div>)}</div>;
}

function Terminal() {
  return <pre className="laptop-terminal"><span className="screen-green">$</span> scan campus-network{"\n"}<span className="screen-muted">Checking services…</span>{"\n\n"}22/tcp  <span className="screen-green">secure</span>{"\n"}443/tcp <span className="screen-green">secure</span>{"\n"}8080   <span className="screen-amber">review</span>{"\n\n"}<span className="screen-green">✓</span> protection enabled</pre>;
}

function Infrastructure() {
  return <div className="laptop-dashboard"><div className="screen-toolbar"><b>Infrastructure</b><span>all systems online</span></div><div className="network-map"><i /><i /><i /><i /><span className="network-link one" /><span className="network-link two" /><span className="network-link three" /></div><div className="metric-row"><span>Uptime <b>99.9%</b></span><span>Nodes <b>24</b></span></div></div>;
}

function Systems() {
  return <div className="laptop-workflow"><div className="screen-toolbar"><b>Student portal</b><span>workflow</span></div><div className="workflow-row"><span>Request</span><i>→</i><span>Review</span><i>→</i><span>Complete</span></div><div className="workflow-card"><b>Course registration</b><span>Connected systems working together</span><div><i /><i /><i /></div></div></div>;
}

function Analytics() {
  return <div className="laptop-analytics"><div className="screen-toolbar"><b>Learning insights</b><span>this semester</span></div><div className="chart-bars">{[42, 67, 54, 82, 72, 92, 76].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div><div className="metric-row"><span>Projects <b>18</b></span><span>Growth <b>+24%</b></span></div></div>;
}

const screens = [Editor, Pipeline, Terminal, Infrastructure, Systems, Analytics];

export function DisciplineLaptop({ activeIndex }: { activeIndex: number }) {
  const [displayedIndex, setDisplayedIndex] = useState(activeIndex);
  const stageRef = useRef<HTMLDivElement>(null);
  const machineRef = useRef<HTMLDivElement>(null);
  const lidRef = useRef<HTMLDivElement>(null);
  const displayedRef = useRef(activeIndex);
  const requestedRef = useRef(activeIndex);
  const runningRef = useRef(false);
  const initializedRef = useRef(false);
  const unmountedRef = useRef(false);

  useEffect(() => () => {
    unmountedRef.current = true;
  }, []);

  useEffect(() => {
    requestedRef.current = activeIndex;
    const machine = machineRef.current;
    const lid = lidRef.current;
    if (!machine || !lid || runningRef.current || activeIndex === displayedRef.current) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof lid.animate !== "function") {
      displayedRef.current = activeIndex;
      setDisplayedIndex(activeIndex);
      machine.style.setProperty("--laptop-yaw", `${yaws[activeIndex]}deg`);
      return;
    }

    const run = async () => {
      runningRef.current = true;
      while (!unmountedRef.current && requestedRef.current !== displayedRef.current) {
        const next = requestedRef.current;
        const direction = next > displayedRef.current ? 1 : -1;
        await Promise.all([
          lid.animate([{ transform: "rotateX(18deg)" }, { transform: "rotateX(-88deg)" }], { duration: 500, easing: "cubic-bezier(.65,0,.35,1)", fill: "forwards" }).finished,
          machine.animate([{ transform: `rotateX(-10deg) rotateY(${yaws[displayedRef.current]}deg)` }, { transform: `translateZ(-45px) rotateX(-10deg) rotateY(${yaws[displayedRef.current] + direction * 16}deg)` }], { duration: 500, easing: "cubic-bezier(.65,0,.35,1)", fill: "forwards" }).finished,
        ]).catch(() => undefined);
        if (unmountedRef.current) break;
        displayedRef.current = next;
        setDisplayedIndex(next);
        machine.style.setProperty("--laptop-yaw", `${yaws[next]}deg`);
        await new Promise(requestAnimationFrame);
        await Promise.all([
          lid.animate([{ transform: "rotateX(-88deg)" }, { transform: "rotateX(20deg)", offset: .82 }, { transform: "rotateX(18deg)" }], { duration: 740, easing: "cubic-bezier(.16,1,.3,1)", fill: "forwards" }).finished,
          machine.animate([{ transform: `translateZ(-45px) rotateX(-10deg) rotateY(${yaws[next] - direction * 12}deg)` }, { transform: `rotateX(-10deg) rotateY(${yaws[next]}deg)` }], { duration: 740, easing: "cubic-bezier(.16,1,.3,1)", fill: "forwards" }).finished,
        ]).catch(() => undefined);
      }
      lid.getAnimations().forEach(animation => animation.cancel());
      machine.getAnimations().forEach(animation => animation.cancel());
      runningRef.current = false;
    };
    void run();
  }, [activeIndex]);

  useEffect(() => {
    const stage = stageRef.current;
    const lid = lidRef.current;
    if (!stage || !lid || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || initializedRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      initializedRef.current = true;
      observer.disconnect();
      lid.animate([{ transform: "rotateX(-75deg)" }, { transform: "rotateX(20deg)", offset: .82 }, { transform: "rotateX(18deg)" }], { duration: 900, easing: "cubic-bezier(.16,1,.3,1)" });
    }, { rootMargin: "160px 0px", threshold: .1 });
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    const machine = machineRef.current;
    if (!stage || !machine || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const move = (event: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      const x = Math.max(-.5, Math.min(.5, (event.clientX - rect.left) / rect.width - .5));
      const y = Math.max(-.5, Math.min(.5, (event.clientY - rect.top) / rect.height - .5));
      machine.style.setProperty("--laptop-look-y", `${x * 6}deg`);
      machine.style.setProperty("--laptop-look-x", `${-y * 4}deg`);
    };
    const leave = () => { machine.style.setProperty("--laptop-look-y", "0deg"); machine.style.setProperty("--laptop-look-x", "0deg"); };
    stage.addEventListener("pointermove", move);
    stage.addEventListener("pointerleave", leave);
    return () => { stage.removeEventListener("pointermove", move); stage.removeEventListener("pointerleave", leave); };
  }, []);

  const Screen = screens[displayedIndex];
  return (
    <div ref={stageRef} className="discipline-laptop-stage" aria-hidden="true">
      <div ref={machineRef} className="discipline-laptop" style={{ "--laptop-yaw": `${yaws[displayedIndex]}deg` } as React.CSSProperties}>
        <div ref={lidRef} className="laptop-lid">
          <div className="laptop-glass"><div className="laptop-window"><div className="laptop-windowbar"><span><i /><i /><i /></span><b>{codes[displayedIndex].toLowerCase()}-studio</b><em>{codes[displayedIndex]}</em></div><div className="laptop-screen-app" data-discipline={codes[displayedIndex]}><Screen /></div></div><span className="laptop-camera" /><span className="laptop-sheen" /></div>
          <div className="laptop-lid-back"><span>NACOS</span></div>
        </div>
        <div className="laptop-deck"><span className="laptop-hinge" /><div className="laptop-keyboard"><span /></div><span className="laptop-trackpad" /></div>
        <div className="laptop-front"><span /></div>
        <span className="laptop-shadow" />
      </div>
    </div>
  );
}
