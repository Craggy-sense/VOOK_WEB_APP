import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegistrationModal from "@/components/RegistrationModal";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Vook Voice International",
  description: "Availing Knowledge to the People. A registered NGO in Kenya dedicated to empowerment, leadership training, and spiritual growth.",
  openGraph: {
    title: "Vook Voice International",
    description: "Availing Knowledge to the People. A registered NGO in Kenya dedicated to empowerment.",
    url: "https://vookinternational.org",
    siteName: "Vook Voice International",
    images: [
      {
        url: "/Vook logo.png",
        width: 1200,
        height: 630,
        alt: "Vook Voice International",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vook Voice International",
    description: "Availing Knowledge to the People. A registered NGO in Kenya dedicated to empowerment.",
    images: ["/Vook logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settingsPath = path.join(process.cwd(), "src/content/settings/general.json");
  let settings = { primary_color: "#1A962B", email: "info@vookvoiceinternational.org", phone: "+254 700 000 000", address: "Nairobi, Kenya" };
  try {
    settings = JSON.parse(fs.readFileSync(settingsPath, "utf-8"));
  } catch (e) {
    console.error("Failed to load general settings");
  }

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body style={{ '--primary-green': settings.primary_color } as React.CSSProperties}>
        <Header settings={settings} />
        <main>{children}</main>
        <Footer settings={settings} />
        <RegistrationModal />
      </body>
    </html>
  );
}
