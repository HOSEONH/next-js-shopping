import type { Metadata } from "next";
import "./globals.css";
// import Home from "./components/Home";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        {/* <Home /> */}
        {children}
      </body>
    </html>
  );
}
