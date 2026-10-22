"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, House } from "lucide-react";
import LanguageToggle, { type Language } from "./components/LanguageToggle";

const copy = {
  ta: {
    eyebrow: "கூரைக்கடை",
    title: "பக்கம் கிடைக்கவில்லை",
    text: "நீங்கள் தேடிய பக்கம் இங்கு இல்லை. ஆனால் சூடான சாப்பாடு எப்போதும் தயாராக இருக்கிறது!",
    home: "முகப்புக்குச் செல்ல",
    menu: "சாப்பாட்டைப் பாருங்கள்",
  },
  en: {
    eyebrow: "Kooraikkadai",
    title: "Page Not Found",
    text: "The page you’re looking for isn’t here. But a hot meal is always ready for you!",
    home: "Back to Home",
    menu: "Explore Our Meals",
  },
};

export default function NotFound() {
  const [language, setLanguage] = useState<Language>("ta");
  const t = copy[language];
  const font =
    language === "ta"
      ? "var(--font-tamil), sans-serif"
      : "var(--font-display), sans-serif";

  return (
    <main className="flex min-h-dvh flex-col bg-[#8e250d]">
      <div className="bg-[#651708] text-[#fff4d4]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
          <p className="flex items-center gap-2 text-xs font-semibold tracking-wide sm:text-sm">
            <House size="20" />
            {t.eyebrow}
          </p>
          <LanguageToggle language={language} onChange={setLanguage} />
        </div>
      </div>

      <section className="relative isolate flex flex-1 items-center justify-center px-4 py-16 text-center text-white sm:px-6">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(255,174,24,0.28),_transparent_55%),linear-gradient(125deg,#4b1008_0%,#9c2b0b_52%,#541306_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-20 [background-image:radial-gradient(#ffc928_0.7px,transparent_0.7px)] [background-size:18px_18px]" />

        <div className="flex max-w-2xl flex-col items-center">
          <p
            className="text-[7rem] font-black leading-none tracking-tight text-[#ffcf24] drop-shadow-[0_6px_0_#a74605] sm:text-[11rem] lg:text-[14rem]"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
            aria-hidden="true"
          >
            404
          </p>
          <h1
            className="mt-4 text-3xl font-black leading-snug text-white sm:text-4xl"
            style={{ fontFamily: font }}
          >
            {t.title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-8 text-orange-50/90 sm:text-lg">
            {t.text}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-[#ffca28] px-6 py-3.5 text-sm font-black text-[#4d1707] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#ffdc65]"
            >
              <ArrowLeft size="18" />
              {t.home}
            </Link>
            <Link
              href="/#menu"
              className="inline-flex items-center gap-2 rounded-full border border-[#ffca28]/60 px-6 py-3.5 text-sm font-black text-[#ffe9a8] transition hover:-translate-y-0.5 hover:bg-[#ffca28]/10"
            >
              {t.menu}
            </Link>
          </div>
        </div>
      </section>
      <div className="h-2 bg-gradient-to-r from-[#ffc928] via-[#fff0a3] to-[#ffc928]" />
    </main>
  );
}
