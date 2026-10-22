"use client";

import Image from "next/image";
import { useState } from "react";

type Language = "ta" | "en";

const copy = {
  ta: {
    eyebrow: "தென்காசி • குற்றாலம் சுற்றுவட்டாரம்",
    headline: "வீட்டு சுவை… அம்மா கைப்பக்குவம்!",
    subhead: "மண்வாசனை மாறாத உணவு. மனசார பரிமாறும் அசல் ஊர் சாப்பாடு.",
    intro:
      "சாரல் மெஸ்ஸில் ஒவ்வொரு இலையிலும் வீட்டுச் சமையலின் அன்பும், ஊரின் மணமும்.",
    badge1: "வீட்டு சுவை",
    badge2: "அம்மா கைப்பக்குவம்",
    badge3: "கறி கடை சுவை",
    menuTitle: "இன்றைய சுவை",
    menuSub: "நல்ல பசி… நிறைவான சாப்பாடு!",
    foods: [
      {
        name: "மட்டன் சாப்பாடு",
        english: "Mutton Meals",
        detail: "மசாலா மணம் நிறைந்த நாட்டுச் சுவை",
        image: "/images/mutton-meals.webp",
      },
      {
        name: "சிக்கன் சாப்பாடு",
        english: "Chicken Meals",
        detail: "வீட்டு மசாலாவில் மனம் கவரும் சுவை",
        image: "/images/chicken-meals.webp",
      },
      {
        name: "மீன் சாப்பாடு",
        english: "Fish Meals",
        detail: "கடல் சுவையும் காரசாரமான குழம்பும்",
        image: "/images/fish-meals.webp",
      },
      {
        name: "உளுந்தம்பருப்பு சோறு",
        english: "Ulundhu Paruppu Soru",
        detail: "நம் மண்ணின் பாரம்பரிய உணவு",
        image: "/images/ulunthu-meals.webp",
      },
    ],
    placeTitle: "குற்றாலச் சாரலும், தென்காசி மண்ணின் சுவையும்",
    placeText:
      "அருவி, அணை, பசுமையான வயல்வெளிகள் சூழ்ந்த தென்காசி–குற்றாலம் பகுதியில், ஊர் சாப்பாட்டின் உண்மையான சுவையை அனுபவியுங்கள்.",
    hoursLabel: "திறந்திருக்கும் நேரம்",
    hours: "காலை 11:00 – மாலை 4:00",
    contactLabel: "தொடர்புக்கு",
    footerLine: "உங்கள் வீட்டுச் சுவைக்கான அடுத்த நிறுத்தம் — சாரல் மெஸ்.",
    call: "அழைக்க",
    location: "தென்காசி – குற்றாலம் பக்கம்",
  },
  en: {
    eyebrow: "TENKASI • COURTALLAM SIDE",
    headline: "Homely taste. Amma’s touch.",
    subhead:
      "Comforting country-style non-veg meals, served with the warmth of home.",
    intro:
      "At Saaral Mess, every banana leaf brings the familiar flavour of home cooking.",
    badge1: "Homely Taste",
    badge2: "Amma’s Cooking",
    badge3: "Local Mess Flavour",
    menuTitle: "Our Signature Meals",
    menuSub: "Come hungry. Leave happy.",
    foods: [
      {
        name: "Mutton Meals",
        english: "Mutton Meals",
        detail: "A hearty meal with rich, homestyle masala",
        image: "/images/mutton-meals.webp",
      },
      {
        name: "Chicken Meals",
        english: "Chicken Meals",
        detail: "Comforting chicken curry with homely spices",
        image: "/images/chicken-meals.webp",
      },
      {
        name: "Fish Meals",
        english: "Fish Meals",
        detail: "Bold fish curry and authentic local flavour",
        image: "/images/fish-meals.webp",
      },
      {
        name: "Ulundhu Paruppu Soru",
        english: "Ulundhu Paruppu Soru",
        detail: "A traditional taste from our region",
        image: "/images/ulunthu-meals.webp",
      },
    ],
    placeTitle: "Courtallam’s mist. Tenkasi’s flavour.",
    placeText:
      "Surrounded by waterfalls, the dam and green agricultural fields, enjoy the honest taste of local home-style cooking on the Tenkasi–Courtallam side.",
    hoursLabel: "Opening Hours",
    hours: "11:00 AM – 4:00 PM",
    contactLabel: "Contact",
    footerLine: "Your next stop for a homestyle meal — Saaral Mess.",
    call: "Call",
    location: "Tenkasi – Courtallam side",
  },
};

const contacts = [
  { label: "Phone 1", number: "REPLACE_WITH_PHONE_1" },
  { label: "Phone 2", number: "REPLACE_WITH_PHONE_2" },
];

function phoneHref(number: string) {
  return `tel:${number.replace(/[^+0-9]/g, "")}`;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("ta");
  const t = copy[language];

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff8e8]">
      <div className="bg-[#651708] text-[#fff4d4]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
          <p className="text-xs font-semibold tracking-wide sm:text-sm">
            {t.eyebrow}
          </p>
          <div className="flex shrink-0 items-center rounded-full border border-[#f8bd2b]/60 bg-[#431006] p-1 text-xs font-bold">
            <button
              onClick={() => setLanguage("ta")}
              aria-pressed={language === "ta"}
              className={`rounded-full px-3 py-1.5 transition ${language === "ta" ? "bg-[#ffc928] text-[#4d1707]" : "text-white/80 hover:text-white"}`}
            >
              தமிழ்
            </button>
            <button
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
              className={`rounded-full px-3 py-1.5 transition ${language === "en" ? "bg-[#ffc928] text-[#4d1707]" : "text-white/80 hover:text-white"}`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      <section className="relative isolate bg-[#8e250d] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(255,174,24,0.28),_transparent_55%),linear-gradient(125deg,#4b1008_0%,#9c2b0b_52%,#541306_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-20 [background-image:radial-gradient(#ffc928_0.7px,transparent_0.7px)] [background-size:18px_18px]" />
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pb-10 pt-7 sm:px-6 sm:pb-14 sm:pt-10 lg:grid-cols-[1fr_0.9fr] lg:gap-12 lg:py-16">
          <div className="flex flex-col items-start">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ffcf35]/40 bg-black/15 px-3 py-1.5 text-xs font-bold tracking-wide text-[#ffe6a1] sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-[#ffc928]" />
              {t.location}
            </div>
            <h1
              className="max-w-3xl text-4xl font-black leading-[1.18] tracking-tight text-[#ffcf24] drop-shadow-[0_3px_0_#a74605] sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-tamil), sans-serif" }}
            >
              {language === "ta" ? "சாரல் மெஸ்" : "SAARAL MESS"}
            </h1>
            <p
              className="mt-4 max-w-2xl text-2xl font-extrabold leading-snug text-white sm:text-3xl"
              style={{
                fontFamily:
                  language === "ta"
                    ? "var(--font-tamil), sans-serif"
                    : "var(--font-display), sans-serif",
              }}
            >
              {t.headline}
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-orange-50/90 sm:text-lg">
              {t.subhead}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-orange-100/75 sm:text-base">
              {t.intro}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[t.badge1, t.badge2, t.badge3].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-[#ffca2b]/40 bg-[#ffca2b]/10 px-3 py-2 text-xs font-bold text-[#ffe9a8] sm:text-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
            <a
              href="#menu"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ffca28] px-6 py-3.5 text-sm font-black text-[#4d1707] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#ffdc65]"
            >
              {language === "ta"
                ? "சாப்பாட்டைப் பாருங்கள்"
                : "Explore Our Meals"}{" "}
              <span aria-hidden="true">↘</span>
            </a>
          </div>
          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -inset-3 rotate-2 rounded-[2rem] border border-[#ffca28]/35 bg-[#ffca28]/10" />
            <div className="relative overflow-hidden rounded-[1.7rem] border-4 border-[#ffc928] shadow-2xl shadow-black/35">
              <Image
                src="/images/saaral-mess.jpg"
                alt="Traditional mutton meals served on a banana leaf at Saaral Mess"
                width={325}
                height={255}
                priority
                className="h-64 w-full object-cover sm:h-72"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#300b05]/90 to-transparent px-5 pb-5 pt-14">
                <p className="mt-1 text-xl font-extrabold text-white sm:text-2xl">
                  {language === "ta"
                    ? "வயிறாரச் சாப்பிட வாங்க!"
                    : "Come hungry. Eat heartily."}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-[#ffc928] via-[#fff0a3] to-[#ffc928]" />
      </section>

      <section
        id="menu"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16"
      >
        <div className="mb-7 flex flex-col justify-between gap-3 sm:mb-9 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#a13a14]">
              {language === "ta" ? "இலை நிறைய சுவை" : "A LEAF FULL OF FLAVOUR"}
            </p>
            <h2
              className="mt-2 text-3xl font-black text-[#541708] sm:text-4xl"
              style={{
                fontFamily:
                  language === "ta"
                    ? "var(--font-tamil), sans-serif"
                    : "var(--font-display), sans-serif",
              }}
            >
              {t.menuTitle}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#7a4b37] sm:text-base">
            {t.menuSub}
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.foods.map((food, index) => (
            <article
              key={food.english}
              className="group overflow-hidden rounded-2xl border border-[#e8c9a3] bg-white shadow-[0_8px_25px_rgba(91,35,10,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(91,35,10,0.14)]"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={food.image}
                  alt={`${food.name} - traditional non-vegetarian food at Saaral Mess, Tenkasi`}
                  width={325}
                  height={195}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-[#5c1708]/90 px-3 py-1 text-xs font-bold text-[#ffe7a1]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-4">
                <h3
                  className="text-lg font-extrabold text-[#541708]"
                  style={{
                    fontFamily:
                      language === "ta"
                        ? "var(--font-tamil), sans-serif"
                        : "var(--font-display), sans-serif",
                  }}
                >
                  {food.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#855943]">
                  {food.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[1.75rem] bg-[#4f170b] shadow-xl shadow-[#4f170b]/15 md:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#ffcf35]">
              {language === "ta"
                ? "நம் ஊர் • நம் உணவு"
                : "OUR REGION • OUR FOOD"}
            </p>
            <h2
              className="mt-3 text-2xl font-black leading-snug text-white sm:text-3xl"
              style={{
                fontFamily:
                  language === "ta"
                    ? "var(--font-tamil), sans-serif"
                    : "var(--font-display), sans-serif",
              }}
            >
              {t.placeTitle}
            </h2>
            <p className="mt-4 text-sm leading-7 text-orange-50/80 sm:text-base">
              {t.placeText}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                <p className="text-xs font-bold text-[#ffcf35]">
                  {t.hoursLabel}
                </p>
                <p className="mt-2 text-base font-extrabold text-white">
                  {t.hours}
                </p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                <p className="text-xs font-bold text-[#ffcf35]">
                  {language === "ta" ? "எங்கள் பகுதி" : "Find Us Around"}
                </p>
                <p className="mt-2 text-base font-extrabold text-white">
                  {t.location}
                </p>
              </div>
            </div>
          </div>
          <div className="relative min-h-64 sm:min-h-80">
            <Image
              src="/images/tenkasi-courtallam-landscape.jpg"
              alt="Green agricultural fields, Western Ghats waterfall and dam representing the Tenkasi Courtallam region"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#301006]/55 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-[#431407]/75 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm">
              {language === "ta"
                ? "அருவி • அணை • வயல்வெளி"
                : "Waterfalls • Dam • Farmlands"}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#260b06] text-[#fff3d4]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-9 sm:px-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p
              className="text-2xl font-black text-[#ffca28]"
              style={{
                fontFamily:
                  language === "ta"
                    ? "var(--font-tamil), sans-serif"
                    : "var(--font-display), sans-serif",
              }}
            >
              {language === "ta" ? "சாரல் மெஸ்" : "SAARAL MESS"}
            </p>
            <p className="mt-2 max-w-lg text-sm leading-6 text-orange-100/70">
              {t.footerLine}
            </p>
            <p className="mt-2 text-xs text-orange-100/50">{t.location}</p>
          </div>
          <div>
            <h2 className="text-sm font-extrabold text-[#ffcf35]">
              {t.contactLabel}
            </h2>
            <div className="mt-3 flex flex-wrap gap-3">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={phoneHref(contact.number)}
                  className="rounded-full border border-[#ffca28]/35 px-4 py-2 text-sm font-bold transition hover:bg-[#ffca28] hover:text-[#3c160b]"
                >
                  {t.call} · {contact.label}
                </a>
              ))}
            </div>
            <p className="mt-2 text-xs leading-5 text-orange-100/45">
              {language === "ta"
                ? "தொடங்குவதற்கு முன் page.tsx-ல் தொடர்பு எண்களை மாற்றவும்."
                : "Replace the two placeholder numbers in page.tsx before publishing."}
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-orange-100/55">
          © {new Date().getFullYear()} Saaral Mess.{" "}
          {language === "ta"
            ? "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
            : "All rights reserved."}{" "}
          <span className="mx-1 text-[#ffca28]">•</span> Powered by{" "}
          <a
            href="https://tamilbusiness.in"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-[#ffcf35] hover:underline"
          >
            tamilbusiness.in
          </a>
        </div>
      </footer>
    </main>
  );
}
