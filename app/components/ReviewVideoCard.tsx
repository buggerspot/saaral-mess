"use client";

import { useEffect, useRef, useState } from "react";

type ReviewVideoCardProps = {
  src: string;
  poster?: string;
  name: string;
  quote: string;
  rating: number;
  playLabel: string;
  onOpen: () => void;
};

/**
 * Below-the-fold review card. The video file is NOT requested during the
 * initial page load: it is attached only after `window.load` fires AND the
 * card is near the viewport. The card keeps a fixed aspect ratio, so the
 * thumbnail appearing later never shifts layout (no CLS).
 */
export default function ReviewVideoCard({
  src,
  poster,
  name,
  quote,
  rating,
  playLabel,
  onOpen,
}: ReviewVideoCardProps) {
  const cardRef = useRef<HTMLButtonElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    let observer: IntersectionObserver | undefined;

    const startObserving = () => {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            setShouldLoad(true);
            observer?.disconnect();
          }
        },
        { rootMargin: "200px 0px" },
      );
      observer.observe(node);
    };

    if (document.readyState === "complete") {
      startObserving();
    } else {
      window.addEventListener("load", startObserving, { once: true });
    }

    return () => {
      window.removeEventListener("load", startObserving);
      observer?.disconnect();
    };
  }, []);

  return (
    <article className="overflow-hidden rounded-2xl border border-[#e8c9a3] bg-white shadow-[0_8px_25px_rgba(91,35,10,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(91,35,10,0.14)]">
      <button
        ref={cardRef}
        type="button"
        onClick={onOpen}
        aria-label={`${playLabel} – ${name}`}
        className="group relative block aspect-4/5 w-full cursor-pointer overflow-hidden bg-linear-to-br from-[#5c1708] via-[#8e250d] to-[#3a0e05]"
      >
        {shouldLoad && (
          <video
            src={`${src}#t=0.1`}
            poster={poster}
            muted
            playsInline
            preload="metadata"
            tabIndex={-1}
            aria-hidden="true"
            onLoadedData={() => setReady(true)}
            className={`absolute inset-0 h-full w-full object-cover transition duration-500 ${ready ? "opacity-100" : "opacity-0"}`}
          />
        )}
        <span className="absolute inset-0 bg-linear-to-t from-[#300b05]/70 via-transparent to-transparent" />
        <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#ffca28] text-[#4d1707] shadow-lg shadow-black/30 transition group-hover:scale-110">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="-ml-0.5 h-7 w-7"
            aria-hidden="true"
          >
            <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14Z" />
          </svg>
        </span>
      </button>
      <div className="p-4">
        <div
          className="flex gap-0.5 text-[#facc15]"
          role="img"
          aria-label={`${rating} / 5`}
        >
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`h-5 w-5 ${i < rating ? "" : "opacity-25"}`}
              aria-hidden="true"
            >
              <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.38 4.24a1 1 0 0 0 .95.69h4.46c.97 0 1.37 1.24.59 1.81l-3.6 2.62a1 1 0 0 0-.37 1.12l1.38 4.24c.3.92-.76 1.69-1.54 1.12l-3.6-2.62a1 1 0 0 0-1.18 0l-3.6 2.62c-.78.57-1.84-.2-1.54-1.12l1.38-4.24a1 1 0 0 0-.37-1.12L2.27 9.67c-.78-.57-.38-1.81.59-1.81h4.46a1 1 0 0 0 .95-.69l1.38-4.24Z" />
            </svg>
          ))}
        </div>
        <p className="mt-2 text-sm leading-6 text-[#855943]">{quote}</p>
        <p className="mt-2 text-sm font-extrabold text-[#541708]">— {name}</p>
      </div>
    </article>
  );
}
