import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/portfolio/site-shell";
import { ScrollHero, Manifesto } from "@/components/portfolio/scroll-hero";
import { projects, pageHead } from "@/lib/portfolio";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Style. Stories. A little substance.",
      "Meet Elena Rose, a digital storyteller exploring fashion, travel, and intentional living. Discover her world and creative collaborations.",
    ),
  component: Index,
});

function StoryPan() {
  const ref = useRef<HTMLElement>(null);
  useScrollProgress(ref);
  return (
    <section ref={ref} className="pan" aria-label="Selected stories">
      <div className="pan-stage">
        <div className="pan-head site-width">
          <div>
            <p className="eyebrow text-muted-foreground mb-4">A few things I've created</p>
            <h2 className="section-title">
              Selected <em>stories.</em>
            </h2>
          </div>
          <Button asChild variant="editorialOutline">
            <Link to="/work">
              View all work <ArrowUpRight />
            </Link>
          </Button>
        </div>
        <div className="pan-track">
          {projects.map((p, i) => (
            <Link key={p.title} to="/work" className="pan-card project-link group">
              <span className="pan-num eyebrow">
                0{i + 1} / 0{projects.length}
              </span>
              <div className="overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.title}
                  className="project-image"
                  width={1024}
                  height={1280}
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between pt-5">
                <p className="eyebrow text-muted-foreground">{p.brand}</p>
                <ArrowUpRight size={18} />
              </div>
              <h3 className="font-display text-3xl mt-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-7 mt-3 max-w-sm">
                {p.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <SiteShell>
      <ScrollHero />
      <section className="site-width py-10 md:py-14 grid grid-cols-2 md:grid-cols-4 gap-y-7 border-b">
        <div>
          <p className="stat">
            1.2M<span className="text-primary">+</span>
          </p>
          <p className="eyebrow text-muted-foreground mt-2">Across the community</p>
        </div>
        <div className="md:border-l md:pl-12">
          <p className="stat">
            4.8<span className="text-muted-foreground">%</span>
          </p>
          <p className="eyebrow text-muted-foreground mt-2">Engagement rate</p>
        </div>
        <div className="md:border-l md:pl-12">
          <p className="stat">
            30<span className="text-primary">+</span>
          </p>
          <p className="eyebrow text-muted-foreground mt-2">Brand collaborations</p>
        </div>
        <div className="md:border-l md:pl-12">
          <p className="stat">One</p>
          <p className="eyebrow text-muted-foreground mt-2">Authentic point of view</p>
        </div>
      </section>
      <div className="marquee" aria-label="In good company">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <div key={k} className="marquee-set" aria-hidden={k === 1}>
              <span className="eyebrow text-muted-foreground">In good company</span>
              <span className="brand-name">VOGUE</span>
              <span className="brand-name font-sans text-lg tracking-[.15em]">D I O R</span>
              <span className="brand-name">ZARA</span>
              <span className="brand-name italic">The Hoxton</span>
              <span className="brand-name font-sans text-xl">Aesop.</span>
            </div>
          ))}
        </div>
      </div>
      <Manifesto />
      <StoryPan />
    </SiteShell>
  );
}
