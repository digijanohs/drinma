"use client";

import { useEffect } from "react";

/**
 * Übersetzt die englische Oberfläche clientseitig nach Spanisch oder Deutsch.
 * Die englischen Texte stehen fest im Code; die Wörterbücher werden nur
 * geladen, wenn eine andere Sprache als Englisch gewählt wurde.
 */

type Dictionary = Record<string, string>;

const COOKIE = "drinma_lang";
const norm = (value: string) => value.replace(/\s+/g, " ").trim();

function currentLanguage(): string {
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${COOKIE}=([a-z]{2})`));
  return match?.[1] ?? "en";
}

export default function LocaleProvider() {
  useEffect(() => {
    const lang = currentLanguage();
    if (lang === "en") return;

    let dictionary: Dictionary | null = null;
    let stopped = false;
    let running = false;

    const translateText = (node: Text) => {
      const raw = node.nodeValue ?? "";
      const key = norm(raw);
      if (!key) return;
      const hit = dictionary?.[key];
      if (!hit) return;
      const leading = raw.match(/^\s*/)?.[0] ?? "";
      const trailing = raw.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = leading + hit + trailing;
    };

    const translateAttributes = () => {
      const elements = document.querySelectorAll<HTMLElement>(
        "[placeholder],[title],[aria-label],[alt]"
      );
      elements.forEach((element) => {
        for (const attribute of ["placeholder", "title", "aria-label", "alt"]) {
          const value = element.getAttribute(attribute);
          if (!value) continue;
          const hit = dictionary?.[norm(value)];
          if (hit) element.setAttribute(attribute, hit);
        }
      });
    };

    const apply = () => {
      if (stopped || !dictionary || running) return;
      running = true;
      try {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        while (walker.nextNode()) translateText(walker.currentNode as Text);
        translateAttributes();
        document.documentElement.lang = lang;
      } finally {
        running = false;
      }
    };

    const observer = new MutationObserver(() => {
      if (running) return;
      requestAnimationFrame(apply);
    });

    import(`@/lib/i18n/${lang}.json`)
      .then((module) => {
        if (stopped) return;
        dictionary = (module.default ?? module) as Dictionary;
        apply();
        observer.observe(document.body, { childList: true, subtree: true, characterData: true });
      })
      .catch(() => {
        /* Wörterbuch fehlt: Englisch bleibt sichtbar */
      });

    return () => {
      stopped = true;
      observer.disconnect();
    };
  }, []);

  return null;
}
