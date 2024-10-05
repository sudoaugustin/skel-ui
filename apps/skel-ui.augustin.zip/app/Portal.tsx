"use client";

import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { ReactNode, useState } from "react";

type Props = { children: ReactNode };

export default function Portal({ children }: Props) {
  const [refresh, setRefresh] = useState("initial");

  const handleRefresh = () => {
    setRefresh(`${new Date().getMilliseconds()}`);
  };

  return (
    <section className="not-prose relative border border-b-0 border-neutral-200 dark:border-neutral-600 bg-neutral-100 backdrop-blur-md text-neutral-800 rounded-t-lg [&+*]:rounded-t-none [&+*]:mt-0">
      <div className="min-h-[28rem] max-h-[40rem] overflow-y-auto w-full">
        <div
          key={refresh}
          className="p-5 lg:p-10 w-full flex justify-center [&_img]:animate-fd-fade-in leading-normal selection:bg-neutral-800 selection:text-white"
        >
          {children}
        </div>
      </div>
      <button
        type="button"
        title="Refresh"
        className="group bg-neutral-800 active:bg-neutral-700 a-10 flex flex-center absolute bottom-5 right-5 rounded-md"
        onClick={handleRefresh}
      >
        <ArrowPathIcon className="w-5 text-neutral-100 duration-150 group-active:-rotate-180" />
      </button>
    </section>
  );
}
