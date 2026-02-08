import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { getLocale } from "next-intl/server";
import { MotionProvider } from "@/components/shared/motion-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "David Sajitz — Webentwickler & Softwareentwickler",
    template: "%s | David Sajitz",
  },
  description:
    "Persönliche Website von David Sajitz. Fullstack-Entwickler für Websites, Web-Apps und mehr.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MotionProvider>{children}</MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
