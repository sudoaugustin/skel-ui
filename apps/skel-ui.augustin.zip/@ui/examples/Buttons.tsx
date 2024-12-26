import * as Skel from "@skel-ui/react";
import { ReactNode } from "react";

const items = [
  {
    label: "Default Rendering",
    component: (
      <Skel.button className="w-full h-10 flex flex-center font-semibold bg-brand !rounded-lg text-white">
        Press Me
      </Skel.button>
    ),
  },
  {
    label: "Under an API call",
    component: (
      <Skel.Root isLoading>
        <Skel.button className="w-full h-10 flex flex-center font-semibold bg-blue-600 !rounded-lg text-blue-50 first:[&_button]:uppercase">
          Press Me
        </Skel.button>
      </Skel.Root>
    ),
  },
];

export default function Buttons({ children }: { children: ReactNode[] }) {
  return (
    <div className="flex space-x-10 w-full max-w-2xl">
      {items.map(({ label, component }, index) => (
        <div key={label} className="flex-1">
          <h4 className="font-medium mb-2.5 text-neutral-800 dark:text-neutral-200">{label}</h4>
          {component}
          <div className="bg-neutral-800 rounded-lg [&>*]:h-24">{children[index] as string}</div>
        </div>
      ))}
    </div>
  );
}
