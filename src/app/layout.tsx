import "./globals.css";
import "@/assets/tailwind-light/theme.css";
import "primereact/resources/primereact.min.css";
import XMainContent from "@/components/XMainContent";
import XSidebar from "@/components/XSidebar";
import XTopbar from "@/components/XTopbar";
import { ToastProvider } from "@/contexts/ToastContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pocket UAN",
  description: "Sua unidade de atendimento nutricional de bolso",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <PrimeReactProvider>
        <ToastProvider>
          <body className={inter.className}>
            <div className="flex h-screen">
              <XSidebar />
              <div className="flex-1 flex flex-col overflow-hidden">
                <XTopbar />
                <XMainContent>{children}</XMainContent>
              </div>
            </div>
          </body>
        </ToastProvider>
      </PrimeReactProvider>
    </html>
  );
}
