import Link from "next/link";
import { Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-muted py-6 md:py-10">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row mx-auto px-4">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Link href="/" className="flex items-center">
            <span className="text-lg font-bold text-primary">
              UIU Data Science Club
            </span>
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            United International University
            <br />
            United City, Madani Avenue, Badda, Dhaka
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 md:items-end">
          <div className="flex gap-4">
            <a
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary flex items-center gap-2"
              href="https://www.facebook.com/profile.php?id=61573382191627"
              target="_blank"
            >
              <Facebook className="h-5 w-5" />
              <span>Facebook</span>
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2025 UIU Data Science Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
