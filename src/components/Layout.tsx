import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import type { ReactNode } from "react";
import logoAsset from "@/assets/jd-logo.png.asset.json";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/90 border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-4 sm:gap-6 min-w-0">
            <img src={logoAsset.url} alt="JD Auto Detailing logo" className="h-9 w-9 rounded-full object-cover bg-[#0a1b3a]" loading="eager" />
            <span className="font-display text-lg sm:text-xl font-bold text-foreground truncate">JD Auto Detailing</span>
          </Link>
          <div className="flex items-center gap-1 sm:gap-3">
            <Link to="/" className="px-3 py-2 text-sm font-medium hover:text-brand-blue transition-colors" activeProps={{ className: "text-brand-blue" }} activeOptions={{ exact: true }}>Home</Link>
            <Link to="/cars" className="px-3 py-2 text-sm font-medium hover:text-brand-blue transition-colors" activeProps={{ className: "text-brand-blue" }}>Cars</Link>
            <a href="tel:8623301276" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-brand-blue text-primary-foreground text-sm font-semibold shadow-brand hover:opacity-90 transition-opacity">
              <Phone className="h-4 w-4" /> Book Now
            </a>
          </div>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border bg-card mt-20">
        <div className="container mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src={logoAsset.url} alt="" className="h-10 w-10 rounded-full object-cover bg-[#0a1b3a]" />
              <h3 className="text-2xl font-display font-bold text-foreground">JD Auto Detailing</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">Premium mobile detailing, ceramic coatings & paint correction across North NJ.</p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest text-brand-blue mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-green" /> <a href="tel:8623301276">(862) 330-1276</a></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand-green" /> <a href="mailto:justdetailingandco@gmail.com">justdetailingandco@gmail.com</a></li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-green" /> Clifton, NJ 07014</li>
              <li className="flex items-center gap-2"><Instagram className="h-4 w-4 text-brand-green" /> <a href="https://instagram.com/jd.autodetailingco" target="_blank" rel="noopener noreferrer">@jd.autodetailingco</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest text-brand-blue mb-3">Hours</h4>
            <p className="text-sm text-muted-foreground">Open 7 days a week</p>
            <p className="text-lg font-display text-foreground mt-1">9:00 AM to 7:30 PM</p>
          </div>
        </div>
        <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} JD Auto Detailing LLC. All rights reserved.</div>
      </footer>
    </div>
  );
}
