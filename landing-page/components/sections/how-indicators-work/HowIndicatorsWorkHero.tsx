"use client";

import Badge from "@/components/ui/badge/Badge";
import Heading from "@/components/ui/heading/Heading";
import SubHeading from "@/components/ui/subheading/SubHeading";
import { useTranslation } from "react-i18next";

export default function HowIndicatorsWorkHero() {
  const { t } = useTranslation("translation", {
    keyPrefix: "howIndicatorsWork",
  });

  return (
    <div className="mx-auto w-full max-w-4xl text-center">
      <div className="relative mx-auto flex max-w-[717px] flex-col gap-2">
        <Badge text={t("badge")} />
      </div>

      <div className="relative z-10 mx-auto section-header-stack">
        <Heading
          as="h1"
          className="mx-auto max-w-[530px] px-1 text-[40px] font-bold leading-10 tracking-[0.01em] sm:px-0"
          text={t("title")}
        />
        <SubHeading
          className="mx-auto max-w-[460px] px-2 text-lg leading-6 sm:px-0"
          text={t("description")}
        />
      </div>
    </div>
  );
}
