"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Angel Lopez</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Angel Lopez Portfolio" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>"
        />
      </head>
      <body className="dark:bg-stone-800">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          <main className=" mb-32">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
