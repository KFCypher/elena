import { useEffect, type RefObject } from "react";

/**
 * Writes a 0..1 scroll progress value for `ref` into the CSS variable `--p`
 * using a single rAF loop. No React re-renders on scroll.
 * Progress is 0 when the element's top hits the viewport top and 1 when its
 * bottom reaches the viewport bottom (i.e. across its sticky travel).
 */
export function useScrollProgress(
  ref: RefObject<HTMLElement | null>,
  opts: { pointer?: boolean } = {},
) {
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let visible = true;

    const update = () => {
      frame = 0;
      if (reduce.matches) {
        el.style.setProperty("--p", "0");
        return;
      }
      const rect = el.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const p = Math.min(1, Math.max(0, -rect.top / travel));
      el.style.setProperty("--p", p.toFixed(4));
    };
    const schedule = () => {
      if (visible && !frame) frame = requestAnimationFrame(update);
    };

    const onPointer = (e: PointerEvent) => {
      if (reduce.matches || e.pointerType !== "mouse") return;
      el.style.setProperty("--mx", ((e.clientX / window.innerWidth) * 2 - 1).toFixed(3));
      el.style.setProperty("--my", ((e.clientY / window.innerHeight) * 2 - 1).toFixed(3));
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true;
      if (visible) schedule();
    });
    io.observe(el);
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reduce.addEventListener("change", schedule);
    if (opts.pointer) window.addEventListener("pointermove", onPointer, { passive: true });
    return () => {
      io.disconnect();
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reduce.removeEventListener("change", schedule);
      window.removeEventListener("pointermove", onPointer);
    };
  }, [ref, opts.pointer]);
}
