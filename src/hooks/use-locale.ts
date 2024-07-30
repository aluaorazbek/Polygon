import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { usePathname, useRouter } from "next/navigation";

import i18nConfig from "#/i18n.config";

const useLocale = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleLocale = useCallback(
    (locale: string) => {
      const newLocale = locale;
      const days = 30;
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = `; expires=${date.toUTCString()}`;
      document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;
      if (
        currentLocale === i18nConfig.defaultLocale &&
        !i18nConfig.prefixDefault
      ) {
        router.push(`/${newLocale}${currentPathname}`);
      } else {
        router.push(
          currentPathname.replace(`/${currentLocale}`, `/${newLocale}`),
        );
      }

      router.refresh();
    },
    [currentLocale, currentPathname, router],
  );

  return { locales: i18nConfig.locales, currentLocale, handleLocale };
};

export default useLocale;
