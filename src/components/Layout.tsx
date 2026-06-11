import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import type { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-display font-bold text-gradient-gold">JD</span>
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground hidden sm:inline">Auto Detailing</span>
          </Link>
          <div className="flex items-center gap-1 sm:gap-6">
            <Link to="/" className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>Home</Link>
            <Link to="/supercars" className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>Super Cars</Link>
            <a href="tel:8623301276" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-gold text-primary-foreground text-sm font-semibold shadow-gold hover:scale-105 transition-transform">
              <Phone className="h-4 w-4" /> Book Now
            </a>
          </div>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border bg-card/40 mt-20">
        <div className="container mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-display text-gradient-gold mb-3">JD Auto Detailing</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Premium mobile detailing, ceramic coatings & paint correction across North NJ.</p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest text-primary mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> <a href="tel:8623301276">(862) 330-1276</a></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> <a href="mailto:justdetailingandco@gmail.com">justdetailingandco@gmail.com</a></li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Clifton, NJ 07014</li>
              <li className="flex items-center gap-2"><Instagram className="h-4 w-4 text-primary" /> <a href="https://instagram.com/jd.autodetailingco" target="_blank" rel="noopener noreferrer">@jd.autodetailingco</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest text-primary mb-3">Hours</h4>
            <p className="text-sm text-muted-foreground">Open 7 days a week</p>
            <p className="text-lg font-display text-foreground mt-1">9:00 AM – 7:30 PM</p>
          </div>
        </div>
        <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} JD Auto Detailing LLC. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
