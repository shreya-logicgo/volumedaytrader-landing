"use client";

import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import Vector from "@/assets/icons/Vector.svg";

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
    "w-full rounded-xl border border-card-border bg-[#151032] px-4 py-4 text-lg text-white placeholder:text-secondary-text/50 focus:border-card-border focus:outline-none focus:ring-1 focus:ring-white/10";

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-2">
      <label htmlFor={id} className="text-left text-lg font-medium text-white">
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
          className={`${sharedClassName} min-h-[140px] resize-y`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`${sharedClassName} h-[58px]`}
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
      className="mx-auto flex w-full max-w-[1000px] flex-col gap-[30px] rounded-[24px] border border-card-border bg-card-bg p-[30px] shadow-[inset_0px_-4px_100px_21px_rgba(24,25,51,0.2)]"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:gap-[20px]">
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

      <div className="flex flex-col gap-5 sm:flex-row sm:gap-[20px]">
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

      <button
        type="submit"
        className="inline-flex w-fit items-center gap-1.5 rounded-full shadow-control-inset bg-[#ED1F24] px-6 py-3.5 text-lg font-medium text-white shadow-[0_4px_14px_rgba(237,31,36,0.35)] transition-opacity hover:opacity-90"
      >
        {t("submit")}
        <Vector className="block h-5 w-5" aria-hidden="true" />
      </button>
    </form>
  );
}
