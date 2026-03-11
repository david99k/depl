import type { Metadata } from "next";
import localFont from "next/font/local";
import ConditionalLayout from "@/components/layout/ConditionalLayout";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DEPL - 매장에서 옷을 사듯, 쉽고 빠르게 웹사이트를",
  description: "원하는 디자인을 고르고, 내 콘텐츠를 채우면 끝. 코딩 없이 몇 분이면 완성됩니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} antialiased font-[family-name:var(--font-geist-sans)]`}>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
