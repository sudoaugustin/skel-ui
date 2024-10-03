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
    <section className="not-prose relative max-h-[40rem] overflow-y-auto bg-slate-100 backdrop-blur-md text-slate-800 rounded-t-lg [&+figure]:rounded-t-none [&+figure]:mt-0">
      <div key={refresh} className="p-5 lg:p-10 w-full flex justify-center [&_img]:animate-fd-fade-in">
        {children}
      </div>
      <button
        type="button"
        title="Refresh"
        className="group bg-black hover:bg-slate-800 active:bg-slate-700 a-10 flex flex-center absolute bottom-5 right-5 rounded-md"
        onClick={handleRefresh}
      >
        <ArrowPathIcon className="w-5 text-slate-100 duration-150 group-active:-rotate-180" />
      </button>
    </section>
  );
}
