"use client";

import React, { PropsWithChildren } from "react";

import TranslationsProvider from "#/providers/translations";

const AppProvider = ({
  children,
  locale,
}: PropsWithChildren<{ locale: string }>) => (
  <TranslationsProvider locale={locale}>{children}</TranslationsProvider>
);

export default AppProvider;
