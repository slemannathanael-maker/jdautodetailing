import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Phone, Mail, MapPin, Sparkles, Shield, Droplets, Star, ArrowRight, Instagram } from "lucide-react";
import mclarenAsset from "@/assets/mclaren-orange.jpeg.asset.json";
import redPorscheAsset from "@/assets/red-porsche.jpeg.asset.json";
import r8RearwashAsset from "@/assets/r8-rearwash.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JD Auto Detailing LLC | Mobile Detailing North NJ" },
      { name: "description", content: "Premium mobile auto detailing, ceramic coatings, and paint correction across North NJ. Restore gloss. Protect your paint." },
      { property: "og:title", content: "JD Auto Detailing LLC" },
      { property: "og:description", content: "Premium mobile detailing & ceramic coatings in North NJ." },
      { property: "og:image", content: mclarenAsset.url },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Sparkles, title: "Paint Correction", desc: "Multi-stage polishing that removes swirls, scratches, and oxidation while restoring deep mirror gloss." },
  { icon: Shield, title: "Ceramic Coatings", desc: "Hydrophobic, long-term paint protection that keeps your finish cleaner, glossier, and easier to maintain." },
  { icon: Droplets, title: "Full Mobile Detail", desc: "Complete interior and exterior reset done right at your location — driveway, office, or garage." },
];

const reviews = [
  { name: "Andrew L.", text: "Absolutely amazing detail! The team went above and beyond, more meticulous than any detailer I've been to before.", time: "6 months ago" },
  { name: "Joe", text: "My car looks brand new inside and out. Professional, efficient, and paid attention to every detail.", time: "a year ago" },
  { name: "Danielle H.", text: "The only time my car looked this good was when I drove it home from the showroom.", time: "6 months ago" },
];

const areas = ["Clifton", "Nutley", "Morris County", "Passaic County", "Union County", "Essex County", "Hudson County", "Bergen County"];

function Home() {
  return (
    <Layout>
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <img src={mclarenAsset.url} alt="Orange supercar detailed by JD Auto Detailing" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs uppercase tracking-[0.2em] mb-6">
              <Sparkles className="h-3 w-3" /> Mobile Detailing · North NJ
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05] mb-6">
              Restore the <span className="text-gradient-brand">Gloss.</span><br />Protect the <span className="text-gradient-brand">Paint.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">Ceramic coatings and paint correction performed at your location with meticulous, professional care.</p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:8623301276" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-brand text-primary-foreground font-semibold shadow-brand hover:opacity-95 transition-opacity">
                <Phone className="h-4 w-4" /> (862) 330-1276
              </a>
              <a href="https://instagram.com/jd.autodetailingco" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border bg-card/80 hover:border-primary transition-colors font-semibold">
                <Instagram className="h-4 w-4" /> DM "DETAIL" to Book
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}</div>
              <span>45+ five-star reviews</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">What we do</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Showroom-grade <span className="text-gradient-brand">care</span></h2>
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

      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
            <img src={r8RearwashAsset.url} alt="Audi R8 being washed by JD Auto Detailing" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6"><p className="text-xs uppercase tracking-[0.2em] text-primary">Exterior</p><h3 className="text-2xl font-display font-bold">Precision wash</h3></div>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
            <img src={redPorscheAsset.url} alt="Red Porsche after detailing service" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6"><p className="text-xs uppercase tracking-[0.2em] text-primary">Results</p><h3 className="text-2xl font-display font-bold">Deep gloss finish</h3></div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-6">
          <Link to="/cars" className="group block rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-colors bg-card">
            <div className="p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Portfolio</p>
              <h2 className="text-4xl font-display font-bold mb-3">Cars <span className="text-gradient-brand">Gallery</span></h2>
              <p className="text-muted-foreground mb-5">All recent customer work in one place. More vehicles can be added as you send them.</p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold">View Cars <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
            </div>
          </Link>
          <Link to="/supercars" className="group block rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-colors bg-card">
            <div className="p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Featured</p>
              <h2 className="text-4xl font-display font-bold mb-3">Super Cars <span className="text-gradient-brand">Showcase</span></h2>
              <p className="text-muted-foreground mb-5">Dedicated section for exotic and high-performance detail projects.</p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold">View Super Cars <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
            </div>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Five-star service</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">What clients <span className="text-gradient-brand">say</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="p-8 rounded-xl bg-card border border-border">
              <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}</div>
              <p className="text-foreground/90 leading-relaxed text-sm mb-6">"{r.text}"</p>
              <div className="flex items-center justify-between text-xs"><span className="font-semibold">{r.name}</span><span className="text-muted-foreground">{r.time}</span></div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="rounded-2xl bg-card border border-border p-10 md:p-14">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Service Area</p>
              <h2 className="text-4xl font-display font-bold mb-4">We come to <span className="text-gradient-brand">you</span></h2>
              <p className="text-muted-foreground mb-6">Fully mobile across North New Jersey. Driveway, office, or storage unit — we bring the studio to your car.</p>
              <a href="tel:8623301276" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-gradient-brand text-primary-foreground font-semibold shadow-brand hover:opacity-95 transition-opacity"><Phone className="h-4 w-4" /> Schedule a Detail</a>
            </div>
            <div className="flex flex-wrap gap-2">{areas.map((a) => <span key={a} className="px-4 py-2 rounded-full border border-border bg-background text-sm">{a}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-12"><p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Get in touch</p><h2 className="text-4xl md:text-5xl font-display font-bold">Ready when <span className="text-gradient-brand">you are</span></h2></div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a href="tel:8623301276" className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors text-center"><Phone className="h-8 w-8 text-primary mx-auto mb-3" /><p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Call</p><p className="font-display text-lg">(862) 330-1276</p></a>
          <a href="mailto:justdetailingandco@gmail.com" className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors text-center"><Mail className="h-8 w-8 text-primary mx-auto mb-3" /><p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</p><p className="font-display text-sm break-all">justdetailingandco@gmail.com</p></a>
          <div className="p-8 rounded-xl bg-card border border-border text-center"><MapPin className="h-8 w-8 text-primary mx-auto mb-3" /><p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Based In</p><p className="font-display text-lg">Clifton, NJ 07014</p></div>
        </div>
      </section>
    </Layout>
  );
}
