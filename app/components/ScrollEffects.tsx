"use client";

import { useEffect } from "react";

/** Lightweight scroll enhancements: reveal-on-scroll, reading progress and subtle hero parallax. */
export default function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const updateScroll = () => {
      const scrollable = root.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      root.style.setProperty("--reading-progress", `${progress * 100}%`);
      if (!reducedMotion) root.style.setProperty("--scroll-y", `${window.scrollY}px`);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);

    const targets = document.querySelectorAll<HTMLElement>(".reveal-on-scroll");
    if (reducedMotion || !("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver(
        (entries, currentObserver) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              currentObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -45px 0px" }
      );
      targets.forEach((target) => observer.observe(target));
      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", updateScroll);
        window.removeEventListener("resize", updateScroll);
      };
    }

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  return <div className="readingProgress" aria-hidden="true" />;
}
