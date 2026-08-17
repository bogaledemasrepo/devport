"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import navLinks from "@/constant/navLink";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, Moon, Sun } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CommandMenu } from "./command-menu";
import { ScrollProgress } from "./scroll-progress";

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (<>

    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 w-full items-center justify-between gap-4 px-4 sm:px-8 mx-auto">
        <ScrollProgress />
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity shrink-0"
        >
          BOGALE<span className="text-primary">.</span>
        </Link>

        {/* Command Search Menu */}
        <div className="flex-1 max-w-xs sm:max-w-sm mx-4">
          <CommandMenu />
        </div>

        {/* Desktop Navigation & Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <NavigationMenu className="hidden sm:flex">
            <NavigationMenuList className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.link}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.link}
                      className={cn(
                        "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
                      )}
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Theme Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
            className="rounded-full"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Mobile Navigation Sheet Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="sm:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-75 sm:w-100">
              <div className="flex flex-col space-y-4 mt-6">
                {navLinks.map(({ link, name }) => (
                  <Link
                    key={link}
                    href={link}
                    onClick={() => setIsOpen(false)}
                    className="block px-2 py-2 text-lg font-medium hover:text-primary transition-colors"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  </>
  );
}