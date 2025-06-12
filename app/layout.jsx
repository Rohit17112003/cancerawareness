
import "./globals.css";
import { Urbanist } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "remixicon/fonts/remixicon.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Auction",
  description: "Less Price Top Bidder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist?.className}>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
