import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Team", href: "/team" },
    { name: "Partners", href: "/partners" },
    { name: "Questions Bank", href: "/questions" },
    { name: "Track Application", href: "/track" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
            <img
              src="https://res.cloudinary.com/drrhtmzpk/image/upload/v1753383976/UIUDSC_Logo.png"
              alt="UIU DSC"
              className="h-16 w-auto object-contain dark:hidden"
            />
            <img
              src="/logo_dark.png"
              alt="UIU DSC"
              className="h-16 w-auto object-contain hidden dark:block"
            />
            </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground transition-all hover:text-primary border border-transparent hover:border-primary hover:bg-primary/5 rounded-full px-4 py-2"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
            <Link href="/events">Events</Link>
          </Button>
          <ModeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <ModeToggle />
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 space-y-4 bg-background">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="w-full bg-primary text-primary-foreground">
            <Link href="/events">Events</Link>
          </Button>
        </div>
      )}
    </header>
  );
}

