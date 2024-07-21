"use client";

import * as React from "react";

// import type {Metadata} from "next";
import "./globals.css";

import {cn} from "@/lib/utils";

import {fontMarcellus, fontOpenSans} from "@/confing/fonts";
import {Footer, Header} from "@/components";
import {usePathname} from "next/navigation";

import * as SELECTORS from "../confing/selectors";
import NextTopLoader from "nextjs-toploader";

// export const metadata: Metadata = {
//     title: "Wine Shop",
//     description: "Discover a curated selection of fine wines from around the world at our Wine Shop.",
// };

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {

    const pathname = usePathname();
    const showHeader = !(pathname === '/sign-in' || pathname === '/register' || pathname === '/lost-password');
    const showFooter = !(pathname === '/sign-in' || pathname === '/register' || pathname === '/lost-password');

    return (
        <html lang="en" data-lt-installed={true}>
        <body className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontOpenSans.variable, fontMarcellus.variable
        )}>
        <div className="min-h-screen flex flex-col">
            <NextTopLoader height={2}/>

            {showHeader && (<Header/>)}
            <main id={SELECTORS.MAIN_CONTENT_ID} role="main">
                {children}
            </main>
            {showFooter && (<Footer/>)}
        </div>
        </body>
        </html>
    );
}
