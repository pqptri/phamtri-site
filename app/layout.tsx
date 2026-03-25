import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tri Pham",
  description: "Personal Academic Website",
  icons: {
    icon: "/avatar.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}