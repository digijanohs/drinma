"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string; // ISO date string
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(targetDate: string): TimeLeft | null {
  const diff = new Date(targetDate).getTime() - Date.now();
  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(() =>
    getTimeLeft(targetDate)
  );

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft(targetDate));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  if (!timeLeft) {
    return (
      <div className="inline-flex items-center rounded-xl bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-500 dark:bg-gray-700 dark:text-gray-400">
        Ended
      </div>
    );
  }

  const units = [
    { label: "Day", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div
      className="inline-flex items-center gap-1.5"
      aria-label={`Time left: days hours minutes seconds`}
      aria-live="polite"
      aria-atomic="true"
    >
      {units.map(({ label, value }, i) => (
        <div key={label} className="flex items-center gap-1.5">
          <div className="flex min-w-[3rem] flex-col items-center rounded-xl bg-brand-600 px-3 py-2 text-white shadow-sm dark:bg-brand-700">
            <span className="text-xl font-bold leading-none tabular-nums">
              {pad(value)}
            </span>
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wide opacity-80">
              {label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="text-lg font-bold text-brand-600 dark:text-brand-400">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
