import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="site-width site-header">
        <Link to="/" className="wordmark" aria-label="Elena Rose home">
          elena rose<span className="text-primary">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-9" aria-label="Main navigation">
          <Link to="/about" className="nav-link">
            The story
          </Link>
          <Link to="/work" className="nav-link">
            Selected work
          </Link>
          <Link to="/contact" className="nav-link">
            Get in touch
          </Link>
        </nav>
        <Button asChild variant="editorialOutline" className="hidden md:inline-flex">
          <Link to="/contact">
            Let's collaborate <ArrowUpRight />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </header>
      {open && (
        <nav
          className="site-width flex flex-col gap-4 py-6 border-t md:hidden"
          aria-label="Mobile navigation"
        >
          <Link to="/about" onClick={() => setOpen(false)}>
            The story
          </Link>
          <Link to="/work" onClick={() => setOpen(false)}>
            Selected work
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Get in touch
          </Link>
        </nav>
      )}
      <main>{children}</main>
      <footer className="bg-inverse text-inverse-foreground mt-20">
        <div className="site-width py-16">
          <div className="flex flex-col md:flex-row justify-between gap-8 items-start">
            <div>
              <p className="eyebrow mb-5 text-primary">Good things start with a conversation</p>
              <h2 className="section-title">
                Let's make something
                <br />
                <em>worth sharing.</em>
              </h2>
            </div>
            <Button asChild variant="editorial" className="md:mt-12">
              <Link to="/contact">
                Start a conversation <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <div className="mt-16 pt-6 border-t border-background/20 flex flex-wrap items-center justify-between gap-5 text-xs">
            <Link to="/" className="wordmark">
              elena rose.
            </Link>
            <span className="text-background/60">© {new Date().getFullYear()} Elena Rose</span>
            <a
              href="https://ampdirect.online"
              target="_blank"
              rel="noreferrer"
              className="text-background/60 hover:text-background"
            >
              Developed by AMP Direct
            </a>
            <Link to="/contact" className="flex gap-2 items-center">
              Connect with Elena <Instagram size={15} />
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
