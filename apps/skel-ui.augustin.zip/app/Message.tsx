import { ExclamationTriangleIcon } from "@heroicons/react/16/solid";

type Props = {
  type: "note" | "warning";
  children: string;
};

export default function Message({ type, children }: Props) {
  return (
    <div className="flex items-start space-x-2 [&>p]:m-0">
      <i>
        <ExclamationTriangleIcon className="w-5 mt-1" />
      </i>
      {children}
    </div>
  );
}
