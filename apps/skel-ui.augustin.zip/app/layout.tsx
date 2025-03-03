import { PlayIcon, StarIcon } from "@heroicons/react/24/outline";
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
                <div className="space-x-1 flex items-center">
                  <Image src={Logo} alt="" className="w-6 rounded" />
                  <p className="text-lg/none font-semibold">Skel UI</p>
                </div>
              ),
            }}
            tree={source.pageTree}
            sidebar={{
              banner: (
                <div className="px-4 py-2 bg-gradient-to-b from-brand/25 to-[#2563EB]/25 text-neutral-800 dark:text-neutral-200 ring-1 ring-inset ring-black/15 dark:ring-white/15 rounded-lg">
                  <h3 className="text-sm font-medium">Support this project</h3>
                  <p className="text-xs mt-1.5 mb-3">Your support is very much appreciated</p>
                  <div className="flex space-x-4">
                    {[
                      {
                        href: "https://github.com/sudoaugustin/skel-ui",
                        icon: (
                          <StarIcon className="w-4 text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-neutral-100" />
                        ),
                        label: "Github",
                      },
                      {
                        href: "https://www.producthunt.com/posts/skel-ui#skel-ui",
                        icon: (
                          <PlayIcon className="w-4 text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 -rotate-90" />
                        ),
                        label: "Product Hunt",
                      },
                    ].map(({ href, icon, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex flex-grow items-center text-sm space-x-1"
                      >
                        {icon}
                        <span className="group-hover:text-black dark:group-hover:text-white">{label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ),
              collapsible: true,
              defaultOpenLevel: 1,
            }}
            githubUrl="https://github.com/sudoaugustin/skel-ui"
          >
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
