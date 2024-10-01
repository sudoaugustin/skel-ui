"use client";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useProfile from "../useProfile";

export default function Page() {
  const { user, isLoading } = useProfile();

  return (
    <div className="flex space-x-4 text-black bg-white border-slate-50 w-full max-w-sm p-2.5 rounded-lg">
      <div className="size-20 rounded-full overflow-hidden relative">
        {user?.avatar ? (
          <Image src={user?.avatar as string} alt="" fill className="object-cover" />
        ) : (
          <Skeleton className="size-full" />
        )}
      </div>
      <div className="flex-1 space-y-1.5">
        <p className="text-xl font-bold">{user?.name || <Skeleton />}</p>
        <div className="text-sm font-medium">{user?.bio || <Skeleton />}</div>
      </div>
    </div>
  );
}
