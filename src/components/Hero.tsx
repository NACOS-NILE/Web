"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Terminal as TerminalIcon,
  Code2,
  Copy,
  Check,
  Users,
  Play,
  RotateCcw,
} from "lucide-react";
import { CHAPTER_METRICS } from "@/data/nacosData";

interface CodeSnippet {
  tab: string;
  lang: string;
  filename: string;
  badge: string;
  code: string;
  output: string;
}

const SNIPPETS: CodeSnippet[] = [
  {
    tab: "Data Science",
    lang: "python",
    filename: "nile_metrics.py",
    badge: "Python 3.12 • NumPy",
    code: `# NACOS Nile Data Science Lab
import numpy as np

def compute_chapter_velocity(members=500, projects=24):
    """Analyze student project velocity across computing cohorts."""
    active_ratio = np.clip(projects / members * 100, 0, 100)
    return {
        "active_builders": members,
        "motto": ["Learn", "Build", "Grow"],
        "readiness_index": f"{active_ratio:.1f}%"
    }`,
    output: "✓ 500+ student nodes indexed across Nile University FNAS.",
  },
  {
    tab: "Full-Stack",
    lang: "typescript",
    filename: "NacosNileEngine.tsx",
    badge: "Next.js 16 • React 19",
    code: `// NACOS Nile Official Core Experience
import { NileChapter } from "@nacos/core";

export async function DigitalCampus() {
  const chapter = await NileChapter.load({
    disciplines: 6,
    excos: 9,
    motto: "Learn • Build • Grow"
  });
  return chapter.igniteInnovation();
}`,
    output: "✓ 0 errors • Zero layout shift • Production ready on Abuja FCT node.",
  },
  {
    tab: "CyberSec",
    lang: "bash",
    filename: "perimeter_audit.sh",
    badge: "Kali Linux • Defensive SOC",
    code: `#!/usr/bin/env bash
# NACOS Nile Cyber Security Syndicate
echo "[*] Scanning Nile campus computing perimeter..."
nmap -sS -T4 -p 443,80,22 nile.nacos.internal
suricata --af-packet -c /etc/suricata/nile-rules.yaml
echo "[+] Zero critical vulnerabilities detected. Perimeter secure."`,
    output: "✓ Port 443 OPEN (TLS 1.3). Real-time intrusion heuristics: OPTIMAL.",
  },
];

const EXECUTION_RUNS: Record<
  number,
  { steps: string[]; finalStatus: string }
> = {
  0: {
    steps: [
      "[0.02s] Initializing Python 3.12 NumPy runtime environment...",
      "[0.06s] Ingesting 500+ student builder records from Nile FNAS...",
      "[0.11s] Calculating matrix cross-correlation across 6 cohorts...",
      "[0.16s] readiness_index = 94.8% • motto = ['Learn', 'Build', 'Grow']",
      "[✓ 0.20s] Exit code 0: 500+ Nile student nodes indexed successfully.",
    ],
    finalStatus: "STATUS: 200 OK • EXEC: 200ms",
  },
  1: {
    steps: [
      "[0.01s] Turbopack: Compiling /nacos-nile-runtime...",
      "[0.05s] Loading @nacos/core NileChapter module...",
      "[0.09s] Hydrating 6 computing departments & 9 executive profiles...",
      "[0.13s] Pre-rendering static export: 100% static cache hit.",
      "[✓ 0.17s] Exit code 0: Production build deployed on Abuja FCT edge node.",
    ],
    finalStatus: "STATUS: 200 OK • EXEC: 170ms",
  },
  2: {
    steps: [
      "[0.03s] Launching Kali Linux defensive perimeter probe...",
      "[0.07s] Auditing nile.nacos.internal ports 443, 80, 22...",
      "[0.12s] Suricata IDS engine: 1,420 intrusion signatures verified...",
      "[0.15s] Packet analysis complete: TLS 1.3 verified, no leak vectors.",
      "[✓ 0.19s] Exit code 0: Perimeter secure. 0 vulnerabilities detected.",
    ],
    finalStatus: "STATUS: 200 OK • EXEC: 190ms",
  },
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionLogs, setExecutionLogs] = useState<string[]>([]);
  const [executionStatus, setExecutionStatus] = useState<string>("STATUS: READY");
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 });

  const handleTabChange = (idx: number) => {
    setActiveTab(idx);
    setIsExecuting(false);
    setExecutionLogs([]);
    setExecutionStatus("STATUS: READY");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(SNIPPETS[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunCode = () => {
    if (isExecuting) return;
    setIsExecuting(true);
    setExecutionLogs([]);
    setExecutionStatus("RUNNING SIMULATION...");

    const runConfig = EXECUTION_RUNS[activeTab];
    let stepIndex = 0;

    const interval = setInterval(() => {
      if (stepIndex < runConfig.steps.length) {
        const nextStep = runConfig.steps[stepIndex];
        setExecutionLogs((prev) => [...prev, nextStep]);
        stepIndex++;
      } else {
        clearInterval(interval);
        setIsExecuting(false);
        setExecutionStatus(runConfig.finalStatus);
      }
    }, 280);
  };

  const handleResetConsole = () => {
    setIsExecuting(false);
    setExecutionLogs([]);
    setExecutionStatus("STATUS: READY");
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
    setMousePos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden tech-grid-pattern"
    >
      {/* Dynamic Cursor Spotlight Atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-60"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}% ${mousePos.y}%, rgba(39, 65, 147, 0.22), transparent 75%)`,
        }}
      />
      {/* Visual Ambient Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] subtle-blue-glow pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] subtle-green-glow pointer-events-none" />

      {/* Decorative Technical Telemetry Bar */}
      <div className="hidden xl:flex absolute top-32 left-8 right-8 items-center justify-between text-[10px] font-mono text-slate-500 uppercase tracking-widest pointer-events-none border-b border-white/[0.04] pb-2">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#75b947] animate-ping" />
          <span>LAT 9.0069° N • LON 7.3787° E • NILE UNIVERSITY ABUJA</span>
        </div>
        <div className="flex items-center gap-4">
          <span>FNAS COMPUTING CLUSTER</span>
          <span className="text-[#75b947]">● 6 DEPARTMENTS CONNECTED</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Massive Confident Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-slate-300 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#75b947]" />
              <span className="text-[#75b947] font-semibold">NACOS NILE</span>
              <span className="text-slate-500">•</span>
              <span>NILE UNIVERSITY OF NIGERIA</span>
            </div>

            {/* Signature Massive Typography: LEARN. BUILD. GROW. */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight leading-[0.92] text-white uppercase mb-6">
              <span className="block hover:text-[#75b947] transition-colors duration-300">
                LEARN.
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                BUILD.
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#75b947] via-[#a3e635] to-[#3b82f6]">
                GROW.
              </span>
            </h1>

            {/* Compelling Narrative Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-8">
              The official digital front door of the{" "}
              <strong className="text-white font-medium">Nigeria Association of Computing Students</strong> at Nile University of Nigeria. A community of builders, creators, and future technologists shaping what comes next.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#about"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[#274193] hover:bg-[#1f3475] border border-white/10 hover:border-[#75b947]/50 shadow-xl shadow-[#274193]/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore NACOS Nile</span>
                <ArrowRight className="w-4 h-4 text-[#75b947] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#community"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] transition-all"
              >
                <Users className="w-4 h-4 text-slate-400" />
                <span>Meet the Community</span>
              </a>
            </div>

            {/* Chapter Flagship Pill */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] max-w-xl">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#75b947] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#75b947]" />
              </span>
              <p className="text-xs text-slate-300 font-mono">
                <strong className="text-white font-semibold">Flagship Initiative:</strong>{" "}
                Annual Nile Hackathon & Tech Week • 48h Student Innovation Sprint
              </p>
            </div>
          </div>

          {/* Right Column: The "Nile Builder Terminal" Interactive Experience */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Back Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#274193]/40 via-[#75b947]/20 to-transparent blur-2xl -z-10" />

            <div className="rounded-2xl bg-[#0b1429]/90 border border-white/[0.12] shadow-2xl overflow-hidden backdrop-blur-xl">
              {/* Window Titlebar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#060b19] border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ef4444]/80 border border-[#ef4444]" />
                  <span className="w-3 h-3 rounded-full bg-[#eab308]/80 border border-[#eab308]" />
                  <span className="w-3 h-3 rounded-full bg-[#22c55e]/80 border border-[#22c55e]" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <TerminalIcon className="w-3.5 h-3.5 text-[#75b947]" />
                    nacos-nile-runtime
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Live Run Code Action Button */}
                  <button
                    onClick={handleRunCode}
                    disabled={isExecuting}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#75b947]/15 hover:bg-[#75b947]/25 text-[#75b947] border border-[#75b947]/30 text-[11px] font-mono font-medium transition-all disabled:opacity-50 focus:outline-none"
                    title="Simulate executing this code"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>{isExecuting ? "Running..." : "Run Code"}</span>
                  </button>

                  <button
                    onClick={handleCopy}
                    className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors focus:outline-none"
                    aria-label="Copy code snippet"
                    title="Copy code"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-[#75b947]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Interactive Tabs */}
              <div className="flex items-center border-b border-white/[0.08] bg-[#070e22] overflow-x-auto text-xs font-mono">
                {SNIPPETS.map((snip, idx) => (
                  <button
                    key={snip.tab}
                    onClick={() => handleTabChange(idx)}
                    className={`px-4 py-2.5 flex items-center gap-2 transition-colors border-r border-white/[0.06] whitespace-nowrap focus:outline-none ${
                      activeTab === idx
                        ? "bg-[#0b1429] text-white border-b-2 border-b-[#75b947]"
                        : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]"
                    }`}
                  >
                    <Code2 className="w-3 h-3 text-[#75b947]" />
                    <span>{snip.tab}</span>
                  </button>
                ))}
              </div>

              {/* Code Workspace */}
              <div className="p-4 sm:p-5 font-mono text-xs overflow-x-auto">
                <div className="flex items-center justify-between text-[11px] text-slate-400 pb-3 mb-3 border-b border-white/[0.04]">
                  <span className="text-[#3b82f6]">{"// file: "}{SNIPPETS[activeTab].filename}</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.05] text-[10px] text-slate-400">
                    {SNIPPETS[activeTab].badge}
                  </span>
                </div>

                <pre className="text-slate-200 leading-relaxed font-mono whitespace-pre-wrap">
                  <code>{SNIPPETS[activeTab].code}</code>
                </pre>
              </div>

              {/* Live Output Console / Simulated Execution Terminal */}
              <div className="px-4 py-3 bg-[#060b19]/95 border-t border-white/[0.08] font-mono text-xs">
                {executionLogs.length > 0 ? (
                  <div className="space-y-1.5 my-1">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 pb-1 border-b border-white/[0.06]">
                      <span className="text-[#75b947] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#75b947] animate-pulse" />
                        LIVE SIMULATED STDOUT
                      </span>
                      <button
                        onClick={handleResetConsole}
                        className="text-slate-500 hover:text-slate-300 flex items-center gap-1 transition-colors"
                        title="Reset simulated output"
                      >
                        <RotateCcw className="w-2.5 h-2.5" />
                        <span>reset</span>
                      </button>
                    </div>
                    {executionLogs.map((log, idx) => (
                      <div
                        key={idx}
                        className={`text-[11px] leading-tight ${
                          log.startsWith("[✓]")
                            ? "text-[#75b947] font-bold"
                            : "text-slate-300"
                        }`}
                      >
                        {log}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="text-[#75b947] truncate pr-2">
                      {SNIPPETS[activeTab].output}
                    </span>
                    <span className="text-[10px] text-slate-500 whitespace-nowrap">
                      {executionStatus}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Floating Verified Badge */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 p-3 rounded-xl bg-[#0d1733]/95 border border-white/[0.12] shadow-2xl backdrop-blur-xl flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-[#75b947]/40 flex-shrink-0">
                <Image
                  src="/excos-pics/president.jpg"
                  alt="Zikora Fortune Nwafor - President"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-[#75b947] uppercase tracking-wider">
                  Chapter President
                </span>
                <span className="text-xs font-bold text-white">Zikora Fortune Nwafor</span>
                <span className="text-[10px] text-slate-400">NACOS Nile Executive Council</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter Metrics Ribbon (Verified Data) */}
        <div className="mt-20 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {CHAPTER_METRICS.map((metric, i) => (
            <div key={metric.label} className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-baseline gap-1">
                {metric.value}
                {i === 2 && <span className="text-xs text-[#75b947] font-mono">STUDENTS</span>}
              </span>
              <span className="text-sm font-semibold text-slate-300 mt-1">{metric.label}</span>
              <span className="text-xs font-mono text-slate-400 mt-0.5">{metric.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
