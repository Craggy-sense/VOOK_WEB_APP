import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegistrationModal from "@/components/RegistrationModal";

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
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async></script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <RegistrationModal />
      </body>
    </html>
  );
}
