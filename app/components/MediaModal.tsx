"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export type ModalMedia =
  | {
      type: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
    }
  | {
      type: "video";
      src: string;
      title: string;
      poster?: string;
    };

type MediaModalProps = {
  media: ModalMedia | null;
  onClose: () => void;
  closeLabel: string;
};

/**
 * Reusable full-screen viewer for images and videos.
 * - Image: clicking anywhere (image, backdrop or ✕) closes it.
 * - Video: clicking the backdrop or ✕ closes it; clicks on the video
 *   itself are kept so the player controls work.
 * - Escape key always closes.
 */
export default function MediaModal({
  media,
  onClose,
  closeLabel,
}: MediaModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!media) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [media, onClose]);

  if (!media) return null;

  const label = media.type === "image" ? media.alt : media.title;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={onClose}
      className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/90 p-3 backdrop-blur-sm sm:p-6"
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
        aria-label={closeLabel}
        className="absolute right-3 top-3 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#ffca28]/60 bg-[#431006]/90 text-2xl font-bold leading-none text-[#ffe7a1] shadow-lg transition hover:bg-[#ffca28] hover:text-[#4d1707] sm:right-5 sm:top-5"
      >
        <span aria-hidden="true" className="block -translate-y-0.5">
          ×
        </span>
      </button>

      {media.type === "image" ? (
        <Image
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          sizes="100vw"
          className="h-auto max-h-[calc(100dvh-1.5rem)] w-auto max-w-full rounded-xl object-contain shadow-2xl sm:max-h-[calc(100dvh-3rem)]"
        />
      ) : (
        <video
          key={media.src}
          src={media.src}
          poster={media.poster}
          title={media.title}
          controls
          autoPlay
          playsInline
          preload="auto"
          onClick={(event) => event.stopPropagation()}
          className="h-auto max-h-[calc(100dvh-1.5rem)] w-auto max-w-full cursor-auto rounded-xl bg-black shadow-2xl sm:max-h-[calc(100dvh-3rem)]"
        />
      )}
    </div>
  );
}
