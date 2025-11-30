import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Aexaware Infotech",
    description: "Aexaware Infotech builds scalable web, mobile, AI, and DevOps solutions for startups and enterprises – Made in Vadodara, Serving Globally.",
    metadataBase: new URL("https://aexaware.com"),
    openGraph: {
        type: "website",
        url: "https://aexaware.com",
        title: "Aexaware Infotech",
        description: "Aexaware Infotech builds scalable web, mobile, AI, and DevOps solutions for startups and enterprises – Made in Vadodara, Serving Globally.",
        siteName: "Aexaware Infotech",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Aexaware Infotech",
            },
        ],
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        site: "@Aexaware",
        creator: "@Aexaware",
        title: "Aexaware Infotech",
        description: "Aexaware Infotech builds scalable web, mobile, AI, and DevOps solutions for startups and enterprises – Made in Vadodara, Serving Globally.",
        images: ["/og-image.png"],
    },
    authors: [{ name: "Aexaware Infotech" }],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
