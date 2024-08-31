import { Inter } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./bootstrap-grid.min.css";
import "./globals.css";
import "./responsive.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { APIProvider } from "@/contexts/apiProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TON Daily",
  description: "",
  openGraph: {
    images: "https://tondaily.news/images/Thumbnail.png",
  },
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <APIProvider>
        <body className={inter.className}>
          <div id="wrapper" className="wrapper-container index-page">
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      </APIProvider>
    </html>
  );
}
