import type { Metadata } from "next";
import { inter } from "../config/fonts";
import { Providers } from "@/components";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Teslo | Shop",
    default: "Home - Teslo | Shop",
  },
  description: "Una tienda virtual de productos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
