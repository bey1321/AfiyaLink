import localFont from "next/font/local";

export const gotham = localFont({
  variable: "--font-gotham",
  src: [
    {
      path: "./Gotham-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Gotham-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Gotham-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
