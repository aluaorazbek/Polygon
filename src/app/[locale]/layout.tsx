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
  const description = "Enabling an infinitely scalable web of sovereign blockchains that feels like a single chain. Powered by ZK tech."

  return {
    title: BRAND_NAME,
    description,
    keywords: ["polygon"],
    openGraph: {
			title: BRAND_NAME,
			description,
			url: `/`,
			images: [
				{
					url: `/og/large.png`,
					width: 600,
					height: 315,
				},
				{
					url: `/og/large.png`,
					width: 1200,
					height: 600,
				},
			],
			type: 'website',
		},
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
