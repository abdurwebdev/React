import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="stylesheet" href="Shery.css" />
      <body className="bg-[#ECECEC]">{children}
      <script type="text/javascript" src="Shery.js"></script>
      </body>
    </html>
  );
}