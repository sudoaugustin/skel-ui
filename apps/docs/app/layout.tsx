import { DocsLayout } from "fumadocs-ui/layout";
import { RootProvider } from "fumadocs-ui/provider";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import "./global.css";
import { source } from "./source";

const sans = localFont({
  src: "./ClashGrotesk-Variable.woff2",
  display: "swap",
  variable: "--font-sans",
});

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} font-sans`} suppressHydrationWarning>
      <body className="">
        <RootProvider>
          <DocsLayout
            nav={{ title: "Skel UI" }}
            tree={source.pageTree}
            sidebar={{ defaultOpenLevel: 1 }}
            githubUrl="https://github.com/sudoaugustin/@skel-ui"
          >
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
