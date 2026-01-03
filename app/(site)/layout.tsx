import type { ReactNode } from "react";
import AppShell from "@/components/AppShell";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function SiteLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <LanguageProvider>
      <AppShell>{children}</AppShell>
    </LanguageProvider>
  );
}