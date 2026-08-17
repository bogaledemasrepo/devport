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
    <div className="w-full max-w-2xl mx-auto rounded-2xl border border-border/80 bg-slate-950 text-slate-50 shadow-2xl font-mono text-sm overflow-hidden">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="text-xs text-slate-400 ml-2 flex items-center gap-1">
            <Terminal className="w-3 h-3" /> bash
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="text-slate-400 hover:text-slate-100 transition-colors"
          title="Copy command"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>

      {/* Body */}
      <div className="p-5 space-y-3 leading-relaxed">
        <div className="flex items-center gap-2 text-emerald-400">
          <span>$</span>
          <span className="text-slate-100">{command}</span>
        </div>
        <div className="text-slate-400 pl-4 space-y-1">
          <p>⚡ <span className="text-slate-200 font-semibold">Role:</span> Full-Stack Engineer</p>
          <p>🛠️ <span className="text-slate-200 font-semibold">Stack:</span> Next.js 15, TypeScript, Tailwind, Node.js</p>
          <p>🟢 <span className="text-slate-200 font-semibold">Status:</span> Open to new opportunities</p>
        </div>
      </div>
    </div>
  );
}