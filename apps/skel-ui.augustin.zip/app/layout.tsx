import "@skel-ui/react/styles.css";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { RootProvider } from "fumadocs-ui/provider";
import { DM_Mono, DM_Sans } from "next/font/google";
import Image from "next/image";
import type { ReactNode } from "react";
import "./global.css";
import Logo from "./icon.png";
import { source } from "./source";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const mono = DM_Mono({ subsets: ["latin"], variable: "--font-mono", weight: "400" });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} font-sans`} suppressHydrationWarning>
      <body className="">
        <RootProvider>
          <DocsLayout
            nav={{
              title: (
                <div className="space-x-1 flex items-end">
                  <Image src={Logo} alt="" className="w-5 rounded" />
                  <p className="text-lg/none font-semibold">Skel UI</p>
                </div>
              ),
            }}
            tree={source.pageTree}
            sidebar={{ collapsible: false, defaultOpenLevel: 1 }}
            githubUrl="https://github.com/sudoaugustin/skel-ui"
          >
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
