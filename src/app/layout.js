import { Inter } from "next/font/google";
import "./globals.css";
import "./bootstrap-grid.min.css";
import "./responsive.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TON Daily",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="wrapper" class="wrapper-container index-page">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
