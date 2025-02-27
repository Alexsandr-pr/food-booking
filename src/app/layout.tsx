import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/common/Header";
import Footer from "@/common/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});


export const metadata: Metadata = {
    title: "Welcome to TableBooky",
    description: "TableBooky is a platform for booking tables in restaurants",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} `}
            >
                <div className="wrapper">
                    <Header />
                    <div className="min-h-screen mt-[62px] md:mt-[100px] lg:mt-[140px] container">
                        {children}
                    </div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
