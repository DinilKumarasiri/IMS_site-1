import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Header from "@/components/header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://imsaasia.com/"),
  title: "IMS Systems Pte Ltd",
  description:
    "Intelligent data filtering, data reduction algorithms, IIoT edge computing, Real-time control, and Monitoring, Portable Data Loggers, Accelerometers, Tilt Sensors, SMART Sensors, ASC Sensors, Gantner Instruments",
  openGraph: {
    siteName: "IMS Systems Pte Ltd",
    title: "IMS Systems Pte Ltd",
    url: "https://imsaasia.com/",
    description:
      "Intelligent data filtering, data reduction algorithms, IIoT edge computing, Real-time control, and Monitoring, Portable Data Loggers, Accelerometers, Tilt Sensors, SMART Sensors, ASC Sensors, Gantner Instruments",
    type: "website",
    locale: "en_SG",
  },
  twitter: {
    card: "summary",
    title: "IMS Systems Pte Ltd",
    description: "Total Solutions Provider",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
