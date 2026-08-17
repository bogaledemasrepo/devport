"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Folder, User, Mail, Home, Search } from "lucide-react";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <>
      {/* Trigger button rendered inside header container */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full flex items-center justify-between gap-2 text-xs text-muted-foreground bg-secondary/50 border border-border/60 px-3 py-1.5 rounded-full hover:bg-secondary transition-colors"
      >
        <div className="flex items-center gap-2 overflow-hidden">
          <Search className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Search portfolio...</span>
        </div>
        <kbd className="pointer-events-none hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {/* Standard Portal Overlay Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <div className="py-2 w-full flex gap-2 items-center">
          <CommandGroup className="w-full" heading="Navigation">
            <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
              <div className="py-2 flex gap-2 items-center">
                <Home className="mr-2 h-4 w-4" /> Home
              </div>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/projects"))}>
              <div className="py-2 flex gap-2 items-center">
                <Folder className="mr-2 h-4 w-4" /> Projects
              </div>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/about"))}>
              <div className="py-2 flex gap-2 items-center">
                <User className="mr-2 h-4 w-4" /> About & Journey
              </div>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/contact"))}>
              <div className="py-2 flex gap-2 items-center">
                <Mail className="mr-2 h-4 w-4" /> Contact
              </div>
            </CommandItem>
          </CommandGroup>
          </div>
        </CommandList>
      </CommandDialog>
    </>
  );
}