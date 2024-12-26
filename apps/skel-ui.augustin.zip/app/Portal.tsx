"use client";

import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { HTMLAttributes, SVGProps, useState } from "react";

type Props = HTMLAttributes<HTMLElement> & { codesandbox?: string; disableRefresh?: boolean };

function CodesandboxLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path
        d="m1.5 6 10.455-6L22.41 6l.09 11.95L11.955 24 1.5 18zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272zm16.739 0-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM4.634 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L4.633 6.6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Portal({ children, className, codesandbox, disableRefresh }: Props) {
  const [refresh, setRefresh] = useState("initial");

  const handleRefresh = () => {
    setRefresh(`${new Date().getMilliseconds()}`);
  };

  return (
    <section
      className={`not-prose relative border border-b-0 border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 backdrop-blur-md text-neutral-800 rounded-t-lg [&+*]:rounded-t-none [&+*]:mt-0 ${className}`}
    >
      <div className="min-h-[28rem] max-h-[40rem] h-full overflow-y-auto w-full">
        <div
          key={refresh}
          className="p-5 lg:p-10 w-full flex justify-center [&_img]:animate-fd-fade-in leading-normal selection:bg-neutral-800 selection:text-white"
        >
          {children}
        </div>
      </div>
      <div className="flex space-x-2.5 absolute bottom-5 right-5 text-neutral-100">
        {codesandbox && (
          <a
            rel="noreferrer"
            href={codesandbox}
            target="_blank"
            title="Open in codesandbox"
            className="a-10 group flex flex-center rounded-md bg-neutral-800 active:bg-neutral-700"
          >
            <CodesandboxLogo className="w-5" />
          </a>
        )}
        {!disableRefresh && (
          <button
            type="button"
            title="Refresh"
            className="a-10 group flex flex-center rounded-md bg-neutral-800 active:bg-neutral-700"
            onClick={handleRefresh}
          >
            <ArrowPathIcon className="w-5" />
          </button>
        )}
      </div>
    </section>
  );
}
