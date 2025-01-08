import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export const metadata = {
  title: "Booking app",
  description: "Application used to reserve motorcycles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
