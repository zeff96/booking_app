import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import SessionProviders from "./components/session/SessionProvider";

export const metadata = {
  title: "Booking app",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <SessionProviders>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </SessionProviders>
  );
}
