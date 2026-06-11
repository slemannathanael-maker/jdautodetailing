import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Phone, Sparkles, Instagram } from "lucide-react";
import mclarenAsset from "@/assets/mclaren-orange.jpeg.asset.json";
import redPorscheAsset from "@/assets/red-porsche.jpeg.asset.json";
import silverPorscheAsset from "@/assets/silver-porsche.jpeg.asset.json";

export const Route = createFileRoute("/supercars")({
  head: () => ({
    meta: [
      { title: "Super Cars Showcase | JD Auto Detailing LLC" },
      { name: "description", content: "Exotic and luxury car detailing showcase from JD Auto Detailing across North NJ." },
      { property: "og:title", content: "Super Cars Showcase | JD Auto Detailing" },
      { property: "og:description", content: "Exotic and luxury car detailing showcase across North NJ." },
      { property: "og:image", content: mclarenAsset.url },
    ],
  }),
  component: SuperCars,
});

const featured = [
  { img: mclarenAsset.url, title: "McLaren", note: "Exotic exterior detail" },
  { img: redPorscheAsset.url, title: "Porsche 911", note: "Paint correction finish" },
  { img: silverPorscheAsset.url, title: "Porsche Carrera", note: "Full wash and gloss reset" },
];

function SuperCars() {
  return (
    <Layout>
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <img src={mclarenAsset.url} alt="Orange McLaren detailed by JD Auto Detailing" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/65 to-background/25" />
        <div className="relative container mx-auto px-6 py-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs uppercase tracking-[0.2em] mb-6"><Sparkles className="h-3 w-3" /> Exotic Showcase</div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05] mb-6 max-w-3xl">Super Car <span className="text-brand-blue">Detailing</span></h1>
          <p className="text-lg text-muted-foreground max-w-xl">A look at high-performance vehicles detailed by JD Auto Detailing using only real customer work photos.</p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((car, i) => (
            <div key={i} className="group relative aspect-[4/5] rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors">
              <img src={car.img} alt={car.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6"><h3 className="text-2xl font-display font-bold mb-1">{car.title}</h3><p className="text-sm text-muted-foreground">{car.note}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="rounded-2xl bg-card border border-border p-10 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Drive something <span className="text-brand-blue">special?</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">Exotics and supercars get our most meticulous treatment. Reach out for ceramic and correction packages.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:8623301276" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-brand-blue text-primary-foreground font-semibold shadow-brand hover:opacity-95 transition-opacity"><Phone className="h-4 w-4" /> (862) 330-1276</a>
            <a href="https://instagram.com/jd.autodetailingco" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border hover:border-primary transition-colors font-semibold"><Instagram className="h-4 w-4" /> @jd.autodetailingco</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
