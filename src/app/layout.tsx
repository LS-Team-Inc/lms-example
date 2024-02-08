import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import InnerPage from "@components/InnerPage";
import Provider from "@/context/authContext";

export const metadata: Metadata = {
  title: "LS TEAM ",
  description:
    "Browse through our selection of 100+ free programming courses to unleash the coding genius hidden deep within you. LS TEAM  lets you choose what you want to learn so that you can explore programming concepts at your chosen pace!",
};

const HKgrotest = localFont({
  src: [
    {
      path: "../../public/fonts/HKGrotesk-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/HKGrotesk-Medium.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--body-font",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={HKgrotest.variable}>
        <Provider>
          <InnerPage>{children}</InnerPage>
        </Provider>
      </body>
    </html>
  );
}
