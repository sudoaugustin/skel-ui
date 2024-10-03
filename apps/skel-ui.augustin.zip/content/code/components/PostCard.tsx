"use client";

import Skel from "@skel-ui/react";
import { usePost } from "hooks";
import Image from "next/image";

export default function PostCard() {
  const { post, isLoading } = usePost();

  return (
    <Skel.Root
      isLoading={isLoading}
      className="group w-full max-w-80 p-2.5 flex flex-col bg-white border border-slate-200 rounded-lg overflow-hidden"
    >
      <Skel.Item
        {...imgProps}
        as={Image}
        src={post?.image as string}
        className="aspect-[800/530] duration-100 !rounded-lg loaded:group-hover:scale-110"
      />

      <Skel.Item as="h1" className="text-lg font-semibold mt-5 loading:max-w-48">
        {post?.title}
      </Skel.Item>

      <Skel.Item className="text-sm my-1.5 line-clamp-3 loading:h-[3.75rem]">{post?.description}</Skel.Item>

      <Skel.Item className="text-xs loading:max-w-32">
        {post?.viewsCount} Views • {post?.likesCount} Likes
      </Skel.Item>
    </Skel.Root>
  );
}

const imgProps = {
  alt: "",
  width: 800,
  height: 530,
};
