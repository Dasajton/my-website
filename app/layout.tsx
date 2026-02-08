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
  metadataBase: new URL("https://davidsajitz.de"),
  title: {
    default: "David Sajitz — Webentwickler & Softwareentwickler",
    template: "%s | David Sajitz",
  },
  description:
    "Persönliche Website von David Sajitz. Fullstack-Entwickler für Websites, Web-Apps und mehr.",
  openGraph: {
    type: "website",
    siteName: "David Sajitz",
    locale: "de_DE",
  },
  twitter: {
    card: "summary",
  },
  authors: [{ name: "David Sajitz" }],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <script
            async
            defer
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            src="https://analytics.davidsajitz.de/script.js"
          />
        )}
      </head>
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
