import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Phone, Instagram } from "lucide-react";
import techartRearAsset from "@/assets/techart-red-rear.png.asset.json";
import mclarenAsset from "@/assets/mclaren-orange.jpeg.asset.json";
import detailSignAsset from "@/assets/detail-sign.jpeg.asset.json";
import silverPorscheAsset from "@/assets/silver-porsche.jpeg.asset.json";
import r8RearwashAsset from "@/assets/r8-rearwash.jpeg.asset.json";
import redPorscheAsset from "@/assets/red-porsche.jpeg.asset.json";
import r8FoamAsset from "@/assets/r8-foam.jpeg.asset.json";
import mustangMachEAsset from "@/assets/mustang-mach-e.png.asset.json";
import porscheMacanWhiteAsset from "@/assets/porsche-macan-white.png.asset.json";
import bmw435iGrayAsset from "@/assets/bmw-435i-gray.png.asset.json";
import mercedesE350GrayAsset from "@/assets/mercedes-e350-gray.png.asset.json";
import bentleyFlyingSpurAsset from "@/assets/bentley-flying-spur-red.jpeg.asset.json";
import bmwM8Asset from "@/assets/bmw-m8-white.jpeg.asset.json";
import bmwX4mAsset from "@/assets/bmw-x4m-blue.jpeg.asset.json";
import cybertruckAsset from "@/assets/tesla-cybertruck-camo.jpeg.asset.json";
import lexusIsAsset from "@/assets/lexus-is-gold.jpeg.asset.json";

export const Route = createFileRoute("/cars")({
  head: () => ({
    meta: [
      { title: "Cars Gallery | JD Auto Detailing LLC" },
      { name: "description", content: "Real customer car detailing gallery by JD Auto Detailing LLC." },
      { property: "og:title", content: "Cars Gallery | JD Auto Detailing" },
      { property: "og:description", content: "Real customer car detailing gallery by JD Auto Detailing LLC." },
      { property: "og:image", content: redPorscheAsset.url },
    ],
  }),
  component: CarsPage,
});

const gallery = [
  { src: techartRearAsset.url, title: "TechArt GTstreet R America", note: "One of ten worldwide. 1000+ HP widebody on Porsche 911 Turbo S. Every surface detailed and protected.", featured: true },
  { src: mclarenAsset.url, title: "McLaren", note: "Exterior detail" },
  { src: mustangMachEAsset.url, title: "Ford Mustang Mach-E", note: "Exterior + interior service" },
  { src: porscheMacanWhiteAsset.url, title: "Porsche Macan", note: "Exterior detail service" },
  { src: bmw435iGrayAsset.url, title: "BMW 435i", note: "Exterior detail service" },
  { src: mercedesE350GrayAsset.url, title: "Mercedes-Benz E350", note: "Interior/exterior service" },
  { src: detailSignAsset.url, title: "On-site detail", note: "Client location service" },
  { src: silverPorscheAsset.url, title: "Porsche", note: "Wash and gloss" },
  { src: r8RearwashAsset.url, title: "Audi R8", note: "Foam and rinse" },
  { src: redPorscheAsset.url, title: "Porsche 911", note: "Finished correction" },
  { src: r8FoamAsset.url, title: "Audi R8 front", note: "Pre-rinse stage" },
];

function CarsPage() {
  const featuredCar = gallery.find((item) => item.featured);
  const regularCars = gallery.filter((item) => !item.featured);

  return (
    <Layout>
      <section className="container mx-auto px-6 pt-20 pb-10">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Cars <span className="text-brand-blue">Gallery</span></h1>
        <p className="text-muted-foreground max-w-2xl">Real customer work from mobile detailing across North NJ.</p>
      </section>

      {featuredCar && (
        <section className="container mx-auto px-6 pb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center rounded-2xl overflow-hidden bg-card border border-border">
            <div className="relative aspect-[4/5] md:aspect-auto md:h-[500px]">
              <img src={featuredCar.src} alt={featuredCar.title} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="p-8 md:p-12">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-green mb-3">Featured Build</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{featuredCar.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{featuredCar.note}</p>
              <p className="text-lg font-display italic text-foreground mb-8">Cars at this level don't get average work.</p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:8623301276" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand-blue text-primary-foreground font-semibold shadow-brand hover:opacity-90 transition-opacity">
                  <Phone className="h-4 w-4" /> (862) 330-1276
                </a>
                <a href="https://instagram.com/jd.autodetailingco" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border hover:border-brand-blue/50 transition-colors font-semibold">
                  <Instagram className="h-4 w-4" /> @jd.autodetailingco
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="container mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularCars.map((item) => (
            <article key={item.src} className="group rounded-xl overflow-hidden border border-border bg-card">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={item.src} alt={item.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-4">
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <p className="text-sm text-muted-foreground">{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
