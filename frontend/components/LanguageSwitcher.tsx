"use client";

import { useEffect, useState } from "react";

const COOKIE = "drinma_lang";

const LANGUAGES = [
  { code: "en", label: "EN", title: "English" },
  { code: "es", label: "ES", title: "Español" },
  { code: "de", label: "DE", title: "Deutsch" },
] as const;

function readLanguage(): string {
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${COOKIE}=([a-z]{2})`));
  return match?.[1] ?? "en";
}

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    setLanguage(readLanguage());
  }, []);

  const change = (code: string) => {
    document.cookie = `${COOKIE}=${code};path=/;max-age=31536000;samesite=lax`;
    setLanguage(code);
    window.location.reload();
  };

  return (
    <div
      className="flex items-center rounded-full border border-brand-200 dark:border-brand-700 overflow-hidden"
      role="group"
      aria-label="Language"
    >
      {LANGUAGES.map((entry) => (
        <button
          key={entry.code}
          type="button"
          onClick={() => change(entry.code)}
          title={entry.title}
          aria-pressed={language === entry.code}
          className={`px-1.5 py-1 text-[10px] font-semibold tracking-wide transition-colors ${
            language === entry.code
              ? "bg-brand-500 text-white"
              : "text-brand-700 dark:text-brand-200 hover:bg-brand-100 dark:hover:bg-brand-900/40"
          }`}
        >
          {entry.label}
        </button>
      ))}
    </div>
  );
}
