import type {Metadata} from "next";
import {Inter, Marcellus, Open_Sans} from "next/font/google";
import "./globals.css";

import {cn} from "@/lib/utils";
import {Header} from "@/components/Header";

const inter = Inter({subsets: ["latin"]});
const openSans = Open_Sans({subsets: ["latin"], display: "swap"});
const marcellus = Marcellus({subsets: ["latin"], weight: "400", display: "swap"});

export const metadata: Metadata = {
    title: "Wine Shop",
    description: "Discover a curated selection of fine wines from around the world at our Wine Shop.",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={cn(
            "min-h-screen bg-background font-sans antialiased",
            openSans.className
        )}>
        <Header/>
        {children}
        </body>
        </html>
    );
}
