import localFont from "next/font/local";

export const generalSans = localFont({
  src: [
    {
      path: "../../public/font/GeneralSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/GeneralSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/GeneralSans-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-general-sans",
});
