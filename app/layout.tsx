import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VYRA — سوق المهارات والخدمات الرقمية",
  description: "اكتشف الخدمات والمشاريع والمواهب الرقمية في منصة VYRA.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}