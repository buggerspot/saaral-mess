"use client";

export type Language = "ta" | "en";

type LanguageToggleProps = {
  language: Language;
  onChange: (language: Language) => void;
};

/**
 * Sliding தமிழ் / EN switch. Clicking either side works:
 * the inactive side selects that language, and clicking the
 * already-active side flips to the other one.
 */
export default function LanguageToggle({
  language,
  onChange,
}: LanguageToggleProps) {
  const isEnglish = language === "en";

  const select = (next: Language) =>
    onChange(next === language ? (isEnglish ? "ta" : "en") : next);

  return (
    <div
      role="group"
      aria-label="Language / மொழி"
      className="relative grid shrink-0 grid-cols-2 items-center rounded-full border border-[#f8bd2b]/60 bg-[#431006] p-1 text-xs font-bold"
    >
      <span
        aria-hidden="true"
        className={`absolute bottom-1 left-1 top-1 w-[calc(50%-0.25rem)] rounded-full bg-[#ffc928] shadow-md shadow-black/30 transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none ${isEnglish ? "translate-x-full" : "translate-x-0"}`}
      />
      <button
        type="button"
        onClick={() => select("ta")}
        aria-pressed={!isEnglish}
        className={`relative z-10 min-w-12 cursor-pointer rounded-full px-3 py-1.5 text-center transition-colors duration-300 ${!isEnglish ? "text-[#4d1707]" : "text-white/80 hover:text-white"}`}
      >
        தமிழ்
      </button>
      <button
        type="button"
        onClick={() => select("en")}
        aria-pressed={isEnglish}
        className={`relative z-10 min-w-12 cursor-pointer rounded-full px-3 py-1.5 text-center transition-colors duration-300 ${isEnglish ? "text-[#4d1707]" : "text-white/80 hover:text-white"}`}
      >
        EN
      </button>
    </div>
  );
}
