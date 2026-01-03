import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Jonas Prado",
  description: "Psicoterapia e autonomia emocional",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="h-full antialiased">
        {children}
      </body>
    </html>
  );
}