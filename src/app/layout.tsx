import * as React from "react";

import type {Metadata} from "next";
import "./globals.css";

import {cn} from "@/lib/utils";

import {fontMarcellus, fontOpenSans} from "@/confing/fonts";
import {Footer, Header} from "@/components";


export const metadata: Metadata = {
    title: "Wine Shop",
    description: "Discover a curated selection of fine wines from around the world at our Wine Shop.",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" data-lt-installed={true}>
        <body className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontOpenSans.variable, fontMarcellus.variable
        )}>
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main role="main">
                {children}
            </main>
            <Footer/>
        </div>
        </body>
        </html>
    );
}
