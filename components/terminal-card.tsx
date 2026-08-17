"use client";

import { useState } from "react";
import { Terminal, Copy, Check } from "lucide-react";

export function TerminalCard() {
  const [copied, setCopied] = useState(false);
  const command = "npx bogale-dev --summary";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border-border/80 mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border bg-slate-950 font-mono text-sm text-slate-50 shadow-2xl">
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-2 flex items-center gap-1 text-xs text-slate-400">
            <Terminal className="h-3 w-3" /> bash
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="text-slate-400 transition-colors hover:text-slate-100"
          title="Copy command"
        >
          {copied ? (
            <Check className="h-4 w-4 text-emerald-400" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Body */}
      <div className="space-y-3 p-5 leading-relaxed">
        <div className="flex items-center gap-2 text-emerald-400">
          <span>$</span>
          <span className="text-slate-100">{command}</span>
        </div>
        <div className="space-y-1 pl-4 text-slate-400">
          <p>
            ⚡ <span className="font-semibold text-slate-200">Role:</span>{" "}
            Full-Stack Engineer
          </p>
          <p>
            🛠️ <span className="font-semibold text-slate-200">Stack:</span>{" "}
            Next.js 15, TypeScript, Tailwind, Node.js
          </p>
          <p>
            🟢 <span className="font-semibold text-slate-200">Status:</span>{" "}
            Open to new opportunities
          </p>
        </div>
      </div>
    </div>
  );
}
