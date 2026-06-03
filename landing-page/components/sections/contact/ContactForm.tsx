"use client";

import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import CtaFlowButton from "@/components/ui/cta-flow/CtaFlowButton";

type FormFields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const initialFields: FormFields = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

function FormField({
  id,
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  multiline = false,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  multiline?: boolean;
}) {
  const sharedClassName =
    "w-full min-w-0 rounded-xl border border-card-border bg-[#151032] px-3 py-3 text-base text-white placeholder:text-secondary-text/50 focus:border-card-border focus:outline-none focus:ring-1 focus:ring-white/10 sm:px-4 sm:py-4 sm:text-lg";

  return (
    <div className="flex w-full min-w-0 flex-col gap-1.5 sm:flex-1 sm:gap-2">
      <label
        htmlFor={id}
        className="text-left text-sm font-medium text-white sm:text-base lg:text-lg"
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`${sharedClassName} min-h-[112px] resize-y sm:min-h-[140px]`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`${sharedClassName} h-12 sm:h-[58px]`}
        />
      )}
    </div>
  );
}

export default function ContactForm() {
  const { t } = useTranslation("translation", {
    keyPrefix: "contactPage.form",
  });
  const [fields, setFields] = useState<FormFields>(initialFields);

  const updateField = (key: keyof FormFields) => (value: string) => {
    setFields((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full min-w-0 max-w-[1000px] flex-col gap-5 rounded-2xl border border-card-border bg-card-bg p-4 shadow-[inset_0px_-4px_100px_21px_rgba(24,25,51,0.2)] sm:gap-6 sm:rounded-[24px] sm:p-6 md:gap-[30px] md:p-8 lg:p-[30px]"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-5 md:gap-[20px]">
        <FormField
          id="firstName"
          label={t("firstName")}
          placeholder={t("firstNamePlaceholder")}
          value={fields.firstName}
          onChange={updateField("firstName")}
        />
        <FormField
          id="lastName"
          label={t("lastName")}
          placeholder={t("lastNamePlaceholder")}
          value={fields.lastName}
          onChange={updateField("lastName")}
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:gap-5 md:gap-[20px]">
        <FormField
          id="email"
          label={t("email")}
          placeholder={t("emailPlaceholder")}
          value={fields.email}
          onChange={updateField("email")}
          type="email"
        />
        <FormField
          id="phone"
          label={t("phone")}
          placeholder={t("phonePlaceholder")}
          value={fields.phone}
          onChange={(value) => {
            updateField("phone")(value.replace(/\D/g, ""));
          }}
          type="tel"
        />
      </div>

      <FormField
        id="message"
        label={t("message")}
        placeholder={t("messagePlaceholder")}
        value={fields.message}
        onChange={updateField("message")}
        multiline
      />
      <CtaFlowButton
        type="submit"
        label={t("submit")}
        arrowClassName="h-4 w-4 sm:h-5 sm:w-5"
        className="inline-flex cursor-pointer w-full items-center justify-center gap-1.5 rounded-full bg-[#ED1F24] px-5 py-3 text-base font-medium text-white shadow-control-inset shadow-[0_4px_14px_rgba(237,31,36,0.35)] transition-opacity hover:opacity-90 sm:w-fit sm:px-6 sm:py-3.5 sm:text-lg"
      />
    </form>
  );
}
