import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import enMessages from '../../../messages/en.json';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import "../globals.css";

export function generateMetadata(): Metadata {
  const t = enMessages.metadata.home;

  return {
    title: t.title,
    description: t.description,
  };
}

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextIntlClientProvider messages={enMessages} locale="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange={false}
      >
        <TooltipProvider>
          <Header />
        </TooltipProvider>
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}

