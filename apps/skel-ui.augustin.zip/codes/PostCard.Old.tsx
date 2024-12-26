"use client";
import { usePost } from "commons-utils/hooks";
import Image from "../@ui/Image";
import Spinner from "../@ui/Spinner";

export default function PostCard() {
  const { post, isLoading } = usePost();

  return isLoading ? (
    <div className="w-80 h-80 flex flex-center">
      <Spinner />
    </div>
  ) : (
    <div className="group w-full max-w-80 p-2.5 bg-white border border-slate-200 rounded-lg overflow-hidden duration-300">
      <Image src={post?.image} className="rounded aspect-[800/530] duration-150 group-hover:scale-110" />
      <h1 className="text-xl font-bold mt-4">{post?.title}</h1>
      <p className="text-sm my-2">{post?.description}</p>
    </div>
  );
}
