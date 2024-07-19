import type {Metadata} from "next";
import "./globals.css";

import {cn} from "@/lib/utils";
import {Header} from "@/components/Header";

import {fontOpenSans} from "@/confing/fonts";


export const metadata: Metadata = {
    title: "Wine Shop",
    description: "Discover a curated selection of fine wines from around the world at our Wine Shop.",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" data-lt-installed={true}>
        <body className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontOpenSans.className
        )}>
        <Header/>
        {children}
        </body>
        </html>
    );
}
