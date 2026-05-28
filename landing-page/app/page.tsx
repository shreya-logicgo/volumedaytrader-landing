"use client";

import { useTranslation } from "react-i18next";

import LanguageSwitcher from "@/components/common/LanguageSwitcher";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center gap-8 px-6 py-16 text-center">
      <LanguageSwitcher />

      <section className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
          {t("hero.title")}
        </h1>

        <p className="mx-auto max-w-2xl text-base text-slate-600 md:text-lg">
          {t("hero.description")}
        </p>

        <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white">
          {t("hero.primaryButton")}
        </button>
      </section>
    </main>
  );
}