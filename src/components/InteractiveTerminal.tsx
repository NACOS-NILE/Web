"use client";

import React, { useState, useRef, useEffect } from "react";
import { CornerDownLeft, RotateCcw } from "lucide-react";
import { EXCO_MEMBERS } from "@/data/excos";

interface CommandLog {
  id: string;
  type: "input" | "output" | "error" | "system";
  text: string;
  cwd?: string;
}

// Virtual File System for NACOS Shell
const VFS: Record<string, { type: "dir" | "file"; content?: string; children?: string[] }> = {
  "~": {
    type: "dir",
    children: ["about.txt", "departments", "excos", "initiatives", "links.json"],
  },
  "~/about.txt": {
    type: "file",
    content: `Nigeria Association of Computing Students (NACOS)
Nile University of Nigeria Chapter
Motto: Learn • Build • Grow
Faculty: Natural & Applied Sciences
Campus: Plot 681, Cadastral Zone C-OO, Jabi Airport Bypass, Abuja, FCT`,
  },
  "~/links.json": {
    type: "file",
    content: `{
  "discord": "https://discord.gg/nacos-nile",
  "whatsapp": "https://chat.whatsapp.com/invite/nacos-nile",
  "github": "https://github.com/NACOS-NILE",
  "email": "nacos@nileuniversity.edu.ng"
}`,
  },
  "~/departments": {
    type: "dir",
    children: ["csc.txt", "sen.txt", "cyb.txt", "ift.txt", "ifs.txt", "dat.txt"],
  },
  "~/departments/csc.txt": {
    type: "file",
    content: "Computer Science (CSC)\nFocus: Algorithms, Theory of Computation, AI & Systems.",
  },
  "~/departments/sen.txt": {
    type: "file",
    content: "Software Engineering (SEN)\nFocus: Large-scale Software Architecture, Full-Stack, CI/CD.",
  },
  "~/departments/cyb.txt": {
    type: "file",
    content: "Cyber Security (CYB)\nFocus: Penetration Testing, Cryptography, Defensive Forensics.",
  },
  "~/departments/ift.txt": {
    type: "file",
    content: "Information Technology (IFT)\nFocus: Enterprise Networks, Cloud Infrastructure, DevOps.",
  },
  "~/departments/ifs.txt": {
    type: "file",
    content: "Information Systems (IFS)\nFocus: ERP Systems, Business Intelligence, Product Strategy.",
  },
  "~/departments/dat.txt": {
    type: "file",
    content: "Data Science (DAT)\nFocus: Machine Learning, Neural Networks, Big Data Pipelines.",
  },
  "~/excos": {
    type: "dir",
    children: ["president.txt", "vp.txt", "roster.txt"],
  },
  "~/excos/president.txt": {
    type: "file",
    content: "President: Zikora Fortune Nwafor (Computer Science)\nTagline: Passionate about building active student communities.",
  },
  "~/excos/vp.txt": {
    type: "file",
    content: "Vice President: Abdullah Ali Ahmad (Software Engineering)\nTagline: Advocating for student welfare and academic excellence.",
  },
  "~/excos/roster.txt": {
    type: "file",
    content: EXCO_MEMBERS.map((m) => `${m.role.padEnd(28, " ")}: ${m.name}`).join("\n"),
  },
  "~/initiatives": {
    type: "dir",
    children: ["tech-week.txt", "bootcamps.txt", "mentorship.txt"],
  },
  "~/initiatives/tech-week.txt": {
    type: "file",
    content: "Nile Tech Week & Hackathon\nCadence: Annual Flagship\nPrize Pool: ₦1,000,000+ in grants & awards.",
  },
  "~/initiatives/bootcamps.txt": {
    type: "file",
    content: "Hands-on Code Labs & Bootcamps\nCadence: Bi-Weekly\nTracks: Next.js, Flutter, Go, Cloud.",
  },
  "~/initiatives/mentorship.txt": {
    type: "file",
    content: "Industry Mentorship & Tech Talks\nAlumni from Google, Paystack, Moniepoint & Nile Alumni.",
  },
};

export default function InteractiveTerminal() {
  const [cwd, setCwd] = useState("~");
  const [inputVal, setInputVal] = useState("");
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: "sys-1",
      type: "system",
      text: "NACOS Nile OS (x86_64-nile-linux-gnu) v2026.1",
    },
    {
      id: "sys-2",
      type: "system",
      text: "Type 'help' for available shell commands. UNIX commands supported (ls, cd, pwd, cat, clear, whoami).",
    },
  ]);

  const outputContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Internal scroll ONLY — does NOT scroll the window/page!
  useEffect(() => {
    if (outputContainerRef.current) {
      outputContainerRef.current.scrollTop = outputContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCommand = (cmdStr: string) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    const parts = raw.split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(" ");
    const baseIndex = logs.length;

    const newLogs: CommandLog[] = [
      ...logs,
      { id: `in-${baseIndex}`, type: "input", text: raw, cwd },
    ];

    switch (cmd) {
      case "help":
      case "man":
        newLogs.push({
          id: `out-${baseIndex + 1}`,
          type: "output",
          text: `SHELL UTILITIES:
  ls [dir]        List directory contents
  cd <dir>        Change working directory (e.g. 'cd departments', 'cd ..')
  pwd             Print current working directory
  cat <file>      Display file content (e.g. 'cat about.txt')
  whoami          Print current user identity
  uname -a        Print system information
  date            Display current campus time
  echo [text]     Print arguments to standard output
  nacos           Display chapter information
  clear           Clear terminal display`,
        });
        break;

      case "pwd":
        newLogs.push({
          id: `out-${baseIndex + 1}`,
          type: "output",
          text: cwd === "~" ? "/home/student" : `/home/student/${cwd.replace("~/", "")}`,
        });
        break;

      case "ls": {
        let targetPath = cwd;
        if (arg) {
          targetPath = arg.startsWith("~/")
            ? arg
            : cwd === "~"
            ? `~/${arg}`
            : `${cwd}/${arg}`;
        }
        const node = VFS[targetPath];
        if (!node) {
          newLogs.push({
            id: `out-${baseIndex + 1}`,
            type: "error",
            text: `ls: cannot access '${arg}': No such file or directory`,
          });
        } else if (node.type === "file") {
          newLogs.push({
            id: `out-${baseIndex + 1}`,
            type: "output",
            text: arg || targetPath.split("/").pop() || "",
          });
        } else {
          const entries = (node.children || [])
            .map((name) => {
              const fullPath = `${targetPath}/${name}`.replace("~//", "~/");
              const isDir = VFS[fullPath]?.type === "dir";
              return isDir ? `\x1b[34m${name}/\x1b[0m` : name;
            })
            .join("   ");
          newLogs.push({
            id: `out-${baseIndex + 1}`,
            type: "output",
            text: entries || "(empty)",
          });
        }
        break;
      }

      case "cd": {
        if (!arg || arg === "~" || arg === "/") {
          setCwd("~");
        } else if (arg === "..") {
          if (cwd !== "~") {
            const partsPath = cwd.split("/");
            partsPath.pop();
            setCwd(partsPath.join("/") || "~");
          }
        } else {
          const target = arg.startsWith("~/")
            ? arg
            : cwd === "~"
            ? `~/${arg}`
            : `${cwd}/${arg}`;
          if (VFS[target] && VFS[target].type === "dir") {
            setCwd(target);
          } else if (VFS[target] && VFS[target].type === "file") {
            newLogs.push({
              id: `out-${baseIndex + 1}`,
              type: "error",
              text: `bash: cd: ${arg}: Not a directory`,
            });
          } else {
            newLogs.push({
              id: `out-${baseIndex + 1}`,
              type: "error",
              text: `bash: cd: ${arg}: No such file or directory`,
            });
          }
        }
        break;
      }

      case "cat": {
        if (!arg) {
          newLogs.push({
            id: `out-${baseIndex + 1}`,
            type: "error",
            text: "cat: missing file operand",
          });
          break;
        }
        const targetFile = arg.startsWith("~/")
          ? arg
          : cwd === "~"
          ? `~/${arg}`
          : `${cwd}/${arg}`;
        const fileNode = VFS[targetFile];
        if (!fileNode) {
          newLogs.push({
            id: `out-${baseIndex + 1}`,
            type: "error",
            text: `cat: ${arg}: No such file or directory`,
          });
        } else if (fileNode.type === "dir") {
          newLogs.push({
            id: `out-${baseIndex + 1}`,
            type: "error",
            text: `cat: ${arg}: Is a directory`,
          });
        } else {
          newLogs.push({
            id: `out-${baseIndex + 1}`,
            type: "output",
            text: fileNode.content || "",
          });
        }
        break;
      }

      case "whoami":
        newLogs.push({
          id: `out-${baseIndex + 1}`,
          type: "output",
          text: "student@nileuniversity.edu.ng",
        });
        break;

      case "uname":
        newLogs.push({
          id: `out-${baseIndex + 1}`,
          type: "output",
          text: "Linux nacos-nile-node 6.8.0-45-generic #45-Ubuntu SMP PREEMPT_DYNAMIC x86_64 GNU/Linux",
        });
        break;

      case "date":
        newLogs.push({
          id: `out-${baseIndex + 1}`,
          type: "output",
          text: new Date().toUTCString(),
        });
        break;

      case "echo":
        newLogs.push({
          id: `out-${baseIndex + 1}`,
          type: "output",
          text: arg,
        });
        break;

      case "nacos":
        newLogs.push({
          id: `out-${baseIndex + 1}`,
          type: "output",
          text: `NACOS Nile University Chapter
• Motto: Learn • Build • Grow
• Status: 2026/2027 Academic Session
• Explore: Type 'ls' to browse chapter files or 'cat about.txt' to read.`,
        });
        break;

      case "clear":
        setLogs([]);
        setInputVal("");
        return;

      default:
        newLogs.push({
          id: `out-${baseIndex + 1}`,
          type: "error",
          text: `bash: ${cmd}: command not found. Type 'help' for available commands.`,
        });
        break;
    }

    setLogs(newLogs);
    setInputVal("");
  };

  const handleChipClick = (commandToRun: string) => {
    handleCommand(commandToRun);
    inputRef.current?.focus();
  };

  return (
    <section id="terminal" className="relative py-24 bg-[#05070e] border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-8">
          <div>
            <span className="text-xs font-mono text-[#60a5fa] uppercase tracking-widest block mb-2">
              05 / Developer Shell
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Interactive Terminal
            </h2>
          </div>
          <p className="text-sm text-zinc-300 max-w-md leading-relaxed">
            A fully simulated Linux shell. Inspect the virtual file system, read department files, or query chapter leadership.
          </p>
        </div>

        {/* Command shortcut chips */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-xs font-mono text-zinc-500 uppercase mr-2">Quick Shell Commands:</span>
          {[
            "ls",
            "cat about.txt",
            "cd departments",
            "cat excos/roster.txt",
            "pwd",
            "whoami",
            "help",
          ].map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={() => handleChipClick(cmd)}
              className="cut-corner-sm px-3 py-1 bg-white/5 hover:bg-[#60a5fa] hover:text-[#070913] text-xs font-mono text-zinc-300 transition-colors"
            >
              ${cmd}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setLogs([])}
            className="cut-corner-sm px-2.5 py-1 bg-red-500/10 hover:bg-red-500/20 text-red-300 text-xs font-mono transition-colors flex items-center gap-1"
            title="Clear Terminal"
          >
            <RotateCcw className="w-3 h-3" />
            <span>clear</span>
          </button>
        </div>

        {/* Terminal Window Container */}
        <div className="cut-corner bg-[#070913] border border-white/10 shadow-2xl overflow-hidden">
          
          {/* Top Window Bar */}
          <div className="px-5 py-3.5 bg-[#030408] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/80" />
              <span className="ml-3 text-xs font-mono text-zinc-400">student@nacos-nile:~ (bash)</span>
            </div>
            <span className="text-[10px] font-mono text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 cut-corner-sm">
              ● Node: Nile University Campus
            </span>
          </div>

          {/* Terminal Output Log Area (Scroll stays purely internal) */}
          <div
            ref={outputContainerRef}
            className="p-6 font-mono text-xs sm:text-sm min-h-[320px] max-h-[440px] overflow-y-auto space-y-3 terminal-scroll"
          >
            {logs.map((log) => {
              if (log.type === "input") {
                return (
                  <div key={log.id} className="text-white font-bold flex items-center gap-2">
                    <span className="text-[#10b981]">student@nacos-nile:{log.cwd || "~"}$</span>
                    <span>{log.text}</span>
                  </div>
                );
              }
              if (log.type === "error") {
                return (
                  <div key={log.id} className="text-red-400 whitespace-pre-wrap pl-2 border-l-2 border-red-500/50">
                    {log.text}
                  </div>
                );
              }
              if (log.type === "system") {
                return (
                  <div key={log.id} className="text-[#60a5fa] italic">
                    {log.text}
                  </div>
                );
              }
              return (
                <div key={log.id} className="text-zinc-300 whitespace-pre-wrap pl-2 border-l-2 border-[#60a5fa]/30 py-1 bg-white/[0.01]">
                  {log.text}
                </div>
              );
            })}
          </div>

          {/* Prompt Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(inputVal);
            }}
            className="p-3.5 bg-[#030408] border-t border-white/10 flex items-center gap-3"
          >
            <span className="text-[#10b981] font-mono text-xs sm:text-sm font-bold pl-2 shrink-0">
              student@nacos-nile:{cwd}$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'ls', 'cat about.txt', 'help'..."
              className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm focus:outline-none placeholder-zinc-600"
              autoComplete="off"
              spellCheck="false"
            />
            <button
              type="submit"
              className="cut-corner-sm px-4 py-1.5 bg-[#60a5fa] hover:bg-white text-[#070913] font-mono text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <span>Execute</span>
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
