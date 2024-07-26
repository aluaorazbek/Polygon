"use client";

import React from "react";
import { useTranslation } from "react-i18next";

import useLocale from "#/hooks/useLocale";
import twitterSVG from "#/public/logo/twitter.svg"

const Header = () => {
  const { t } = useTranslation("header");
  const { locales, handleLocale } = useLocale();

  return (
    <header className="">
      
      <div className="flex items-center gap-7">
        {t("header_title")}
        {t("nav_menu")}
        {locales.map((locale) => (
          <button
            key={locale}
            type="button"
            className="bg-red-100"
            onClick={() => {
              handleLocale(locale);
            }}
          >
            {locale}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
