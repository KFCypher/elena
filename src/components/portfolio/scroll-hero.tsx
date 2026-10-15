import { Link } from "@tanstack/react-router";
import { useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { editorial } from "@/lib/portfolio";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

/**
 * Layered "viewfinder" hero. Planes, back to front:
 *  1. photo plate      – slow zoom-out, then cropped into a magazine plate
 *  2. atmosphere       – warm light leak drifting at its own rate
 *  3. split headline   – "Elena" / "Rose." part around the plate
 *  4. foreground frame – crop marks that converge as the plate forms
 *  5. caption + copy   – semantic copy, readable at every position
 */
export function ScrollHero() {
  const ref = useRef<HTMLElement>(null);
  useScrollProgress(ref, { pointer: true });
  return (
    <section ref={ref} className="vf" aria-label="Introduction">
      <div className="vf-stage">
        <div className="vf-plate">
          <img
            src={editorial}
            alt="Elena in modern black tailoring on a Mediterranean terrace"
            width={1920}
            height={1280}
            fetchPriority="high"
            className="vf-img"
          />
          <div className="vf-shade" aria-hidden />
        </div>
        <div className="vf-light" aria-hidden />
        <h1 className="vf-title">
          <span className="vf-word vf-word-a">Elena</span>
          <span className="vf-word vf-word-b">
            <em>Rose.</em>
          </span>
        </h1>
        <div className="vf-frame" aria-hidden>
          <i className="tl" />
          <i className="tr" />
          <i className="bl" />
          <i className="br" />
        </div>
        <p className="vf-caption eyebrow" aria-hidden>
          Plate 01 — Mediterranean, in black
        </p>
        <div className="vf-copy site-width">
          <p className="eyebrow flex items-center gap-2">
            <span className="vf-dot" /> Creator. Storyteller. Always curious.
          </p>
          <p className="vf-lede">
            A considered eye. An authentic voice. Style, places, and the moments that make life a
            little more beautiful.
          </p>
          <Button variant="editorial" asChild>
            <Link to="/work">
              Explore my world <ArrowUpRight />
            </Link>
          </Button>
        </div>
        <div className="vf-foot site-width">
          <span className="eyebrow">Fashion &nbsp;/&nbsp; Lifestyle &nbsp;/&nbsp; Travel</span>
          <span className="eyebrow flex items-center gap-3">
            Scroll to frame it <ArrowDown size={14} />
          </span>
        </div>
      </div>
    </section>
  );
}

const MANIFESTO =
  "I believe the best stories are the ones that feel like you. I create with intention — a little inspiration, and a lot of real life.".split(
    " ",
  );

/** Pinned manifesto: words illuminate one by one as you scroll. */
export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  useScrollProgress(ref);
  return (
    <section ref={ref} className="mf" aria-label="Point of view">
      <div className="mf-stage site-width">
        <p className="eyebrow text-muted-foreground mb-8">Beyond the feed — a point of view</p>
        <p className="mf-text">
          {MANIFESTO.map((w, i) => (
            <span
              key={i}
              className="mf-w"
              style={{ ["--i" as string]: (i / MANIFESTO.length).toFixed(3) }}
            >
              {w}{" "}
            </span>
          ))}
        </p>
        <Button asChild variant="link" className="px-0 mt-8 text-foreground">
          <Link to="/about">
            Get to know me <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
