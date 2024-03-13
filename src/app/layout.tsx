import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import SideDrawer from "../../src/components/large/SideDrawer/SideDrawer";
import TopBar from "@/components/large/TopBar/TopBar";

const inter = Inter({ subsets: ["latin"] });

type Metadata = {
  title: string;
  description: string;
};

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Modarb Admin panel",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="mainStructure">
          <div className="sidedrawer">
            <SideDrawer /> 
          </div> 
          <div className="content">
            <div className="topbar">
              <TopBar /> 
            </div> 
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
