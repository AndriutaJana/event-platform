import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = localFont({
  src: "./fonts/Poppins-Regular.woff",
  variable: "--font-poppins",
  weight: "400",
});

export const metadata = {
  title: "Eventify",
  description: "Event Management System",
  icons: {
    icon: "/assets/icons/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.variable}  antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
