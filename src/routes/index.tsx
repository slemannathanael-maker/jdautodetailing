import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Phone, Mail, MapPin, Sparkles, Shield, Droplets, Star, ArrowRight, Instagram } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import detailing from "@/assets/detailing.jpg";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JD Auto Detailing LLC | Mobile Detailing North NJ" },
      { name: "description", content: "Premium mobile auto detailing, ceramic coatings, and paint correction across North NJ. Restore gloss. Protect your paint." },
      { property: "og:title", content: "JD Auto Detailing LLC" },
      { property: "og:description", content: "Premium mobile detailing & ceramic coatings in North NJ." },
      { property: "og:image", content: heroCar },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Sparkles, title: "Paint Correction", desc: "Multi-stage polishing that removes swirls, scratches, and oxidation — revealing the deep gloss hiding underneath." },
  { icon: Shield, title: "Ceramic Coatings", desc: "Long-lasting hydrophobic protection. Your paint stays sharper, cleaner, and easier to wash for years." },
  { icon: Droplets, title: "Full Detail", desc: "Inside and out. Hand wash, decontamination, interior deep clean, leather conditioning — like a showroom reset." },
];

const reviews = [
  { name: "Andrew L.", text: "Absolutely amazing detail! The team went above and beyond, more meticulous than any detailer I've been to before. My car looks incredible and the care they put into every corner really shows.", time: "6 months ago" },
  { name: "Joe", text: "JD Auto Detailing did an incredible job! My car looks brand new inside and out like promised. The team was professional, nice and efficient — they paid attention to every detail.", time: "a year ago" },
  { name: "Danielle H.", text: "JD Detailing was fantastic! The only time my car looked so good was when I drove it home from the showroom. They provided incredible attention to detail and I could not have asked for anything better.", time: "6 months ago" },
];

const areas = ["Clifton", "Nutley", "Morris County", "Passaic County", "Union County", "Essex County", "Hudson County", "Bergen County"];

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img src={heroCar} alt="Luxury car with glossy ceramic coating" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs uppercase tracking-[0.2em] mb-6">
              <Sparkles className="h-3 w-3" /> Mobile Detailing · North NJ
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05] mb-6">
              Restore the <span className="text-gradient-gold">Gloss.</span><br />
              Protect the <span className="text-gradient-gold">Paint.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Ceramic coatings and paint correction performed at your driveway. Meticulous, professional, and built around the way your car should look — every single drive.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:8623301276" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:scale-105 transition-transform">
                <Phone className="h-4 w-4" /> (862) 330-1276
              </a>
              <a href="https://instagram.com/jd.autodetailingco" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border bg-card/60 backdrop-blur hover:border-primary transition-colors font-semibold">
                <Instagram className="h-4 w-4" /> DM "DETAIL" to Book
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
              </div>
              <span>45+ five-star reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">What we do</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Showroom-grade <span className="text-gradient-gold">care</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <s.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-display font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SPLIT IMAGES */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
            <img src={detailing} alt="Hand polishing ceramic-coated paint" loading="lazy" width={1280} height={960} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">Exterior</p>
              <h3 className="text-2xl font-display font-bold">Hand-finished gloss</h3>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
            <img src={interior} alt="Detailed luxury car interior" loading="lazy" width={1280} height={960} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">Interior</p>
              <h3 className="text-2xl font-display font-bold">Like new, every seat</h3>
            </div>
          </div>
        </div>
      </section>

      {/* SUPERCARS CTA */}
      <section className="container mx-auto px-6 py-24">
        <Link to="/supercars" className="group block relative rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-colors">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-10 md:p-14">
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Featured Work</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Super Car <span className="text-gradient-gold">Showcase</span></h2>
              <p className="text-muted-foreground mb-6">From Audi R8s to Lamborghinis — see the exotics we've treated with the JD Reset.</p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold">
                Enter the showcase <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
            <div className="relative h-64 md:h-80">
              <img src={heroCar} alt="Featured supercar" loading="lazy" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent md:from-background/90" />
            </div>
          </div>
        </Link>
      </section>

      {/* REVIEWS */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Five-star service</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">What clients <span className="text-gradient-gold">say</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="p-8 rounded-xl bg-card border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
              </div>
              <p className="text-foreground/90 leading-relaxed text-sm mb-6">"{r.text}"</p>
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold">{r.name}</span>
                <span className="text-muted-foreground">{r.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="container mx-auto px-6 py-24">
        <div className="rounded-2xl bg-card border border-border p-10 md:p-14">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Service Area</p>
              <h2 className="text-4xl font-display font-bold mb-4">We come to <span className="text-gradient-gold">you</span></h2>
              <p className="text-muted-foreground mb-6">Fully mobile across North New Jersey. Driveway, office, or storage unit — we bring the studio to your car.</p>
              <a href="tel:8623301276" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:scale-105 transition-transform">
                <Phone className="h-4 w-4" /> Schedule a Detail
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              {areas.map((a) => (
                <span key={a} className="px-4 py-2 rounded-full border border-border bg-background text-sm">{a}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Get in touch</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Ready when <span className="text-gradient-gold">you are</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a href="tel:8623301276" className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors text-center">
            <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Call</p>
            <p className="font-display text-lg">(862) 330-1276</p>
          </a>
          <a href="mailto:justdetailingandco@gmail.com" className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors text-center">
            <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</p>
            <p className="font-display text-sm break-all">justdetailingandco@gmail.com</p>
          </a>
          <div className="p-8 rounded-xl bg-card border border-border text-center">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Based In</p>
            <p className="font-display text-lg">Clifton, NJ 07014</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
