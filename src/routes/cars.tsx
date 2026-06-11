import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import mclarenAsset from "@/assets/mclaren-orange.jpeg.asset.json";
import detailSignAsset from "@/assets/detail-sign.jpeg.asset.json";
import silverPorscheAsset from "@/assets/silver-porsche.jpeg.asset.json";
import r8RearwashAsset from "@/assets/r8-rearwash.jpeg.asset.json";
import redPorscheAsset from "@/assets/red-porsche.jpeg.asset.json";
import r8FoamAsset from "@/assets/r8-foam.jpeg.asset.json";

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
  { src: mclarenAsset.url, title: "McLaren", note: "Exterior showcase" },
  { src: detailSignAsset.url, title: "On-site detail", note: "Client location service" },
  { src: silverPorscheAsset.url, title: "Porsche", note: "Wash + gloss" },
  { src: r8RearwashAsset.url, title: "Audi R8", note: "Foam and rinse" },
  { src: redPorscheAsset.url, title: "Porsche 911", note: "Finished correction" },
  { src: r8FoamAsset.url, title: "Audi R8 front", note: "Pre-rinse stage" },
];

function CarsPage() {
  return (
    <Layout>
      <section className="container mx-auto px-6 pt-20 pb-10">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Cars <span className="text-gradient-brand">Gallery</span></h1>
        <p className="text-muted-foreground max-w-2xl">Real customer work. Send more photos anytime and this tab can keep growing.</p>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item) => (
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
