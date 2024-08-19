import React, { PropsWithChildren } from "react";

import type { Metadata, Viewport } from "next";
import Script from "next/script";

import { dir } from "i18next";

// import Footer from '#views/footer'

import { BRAND_NAME } from "#/constants/name";

import AppProvider from "#/providers/index";

import Footer from "#/views/footer";
import Header from "#/views/header";
import Maintenance from "#/views/maintenance";

import { initTranslations } from "#/app/i18n";

import jsonLd from "#/utils/metadata";

import { generalSans } from "#/styles/fonts";
import "#/styles/globals.css";

import i18nConfig from "#/i18n.config";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { t } = await initTranslations(locale);
  const description = t("Meta.home.description", { brand: BRAND_NAME });

  return {
    title: {
      default: BRAND_NAME,
      template: `${BRAND_NAME} | %s`,
    },
    description,
    keywords: t("Meta.keywords"),
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

const LocaleLayout = ({
  children,
  params: { locale },
}: PropsWithChildren<{ params: { locale: string } }>) => (
  <html
    lang={locale}
    dir={dir(locale)}
    className={`${generalSans.className} dark`}
  >
    <body>
      {process.env.NEXT_PUBLIC_MAINTENANCE === "true" ? (
        <Maintenance />
      ) : (
        <AppProvider locale={locale}>
          <Header />
          <div className="pt-header">{children}</div>
          <Footer />
        </AppProvider>
      )}
    </body>
    <Script
      id="script"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  </html>
);

export default LocaleLayout;
