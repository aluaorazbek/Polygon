"use client";

import React, { PropsWithChildren } from "react";

import TranslationsProvider from "#/providers/Translations";

const AppProvider = ({
  children,
  locale,
}: PropsWithChildren<{ locale: string }>) => (
  <TranslationsProvider locale={locale}>{children}</TranslationsProvider>
);

export default AppProvider;
