import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Navbar from "./components/Navbar";
import MyProfilePic from "./components/MyProfilePic";
const inter = Inter({ subsets: ["latin"] });

export const metadata:Metadata = {
  title: "Home App",
  description: "Learning Next Js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-800`}>
        {/* <nav className="bg-red-400 p-2 m-2">MyNav Bar</nav> */}
        <Navbar/>
        <MyProfilePic/>
        {children}
      </body>
    </html>
  );
}
